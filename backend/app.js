import express from 'express';
import bodyParser from 'body-parser';
import Replicate from 'replicate';
import dotenv from 'dotenv';
import cors from 'cors'; 

dotenv.config();

const app = express();
const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });

const model = 'meta/llama-2-7b-chat';
const version =
  '8e6975e5ed6174911a6ff3d60540dfd4844201974602551e10e9e87ab143d81e';

app.use(bodyParser.json());
app.use(cors());

async function generate(history) {
  const input = {
    prompt: history,
    system_prompt: 'You are a helpful assistant.',
  };

  const output = await replicate.run(`${model}:${version}`, { input });
  return output.join('').trim();
}

app.post('/api/chat', async (req, res) => {
  const conversationHistory = req.body.history;

  try {
    const modelReply = await generate(conversationHistory);
    res.json({ reply: modelReply });
  } catch (error) {
    console.error('Error communicating with Replicate API:', error);
    res.status(500).send('Error generating response');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
