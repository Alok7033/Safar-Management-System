class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    if (message.trim()) {
      this.actionProvider.handleMessageToServer(message);
    }
  }
}

export default MessageParser;
