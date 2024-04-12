import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "Llama Bot",
  initialMessages: [createChatBotMessage("Hi, I am Llama Bot."), createChatBotMessage(
    "I'm here to help. What do you want to ask?.",
    {
      withAvatar: true,
      delay: 1000,
    }
  )],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config