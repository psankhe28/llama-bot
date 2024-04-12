class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async greet(lowerCaseMessage) {
    var msgToDisplay = lowerCaseMessage;
    const greetingMessage = this.createChatBotMessage(msgToDisplay)
    this.updateChatbotState(greetingMessage)
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider