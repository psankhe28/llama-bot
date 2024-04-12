class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    this.msgQ = "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\n";
    this.toShow = "yo";
  }

  async greet(lowerCaseMessage) {
    console.log("calling greeting");
    const customMsg = "Human: " + lowerCaseMessage + "\n";
    this.msgQ = this.msgQ + customMsg;

    // Make a request to your local server
    const responseFromServer = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ history: this.msgQ }),
    });
    console.log("res", responseFromServer)

    const serverResponseJson = await responseFromServer.json();
    const chatResponse = serverResponseJson.reply;
    console.log(chatResponse)
    this.msgQ = this.msgQ + chatResponse + "\n";
    console.log("msgQ: " + this.msgQ);
    this.toShow = chatResponse;

    // Call actionProvider.greet after receiving server response
    this.actionProvider.greet(this.toShow);
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    this.greet(lowerCaseMessage);
  }
}

export default MessageParser;
