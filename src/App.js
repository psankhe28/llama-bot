import Chatbot from 'react-chatbot-kit';
import './App.css';

import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';
import config from './components/config';
import Head from './components/Head';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head />
        <Chatbot className="chats" config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
    </div>
  );
}

export default App;
