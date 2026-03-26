class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Send bot reply
  handleBotReply = (reply) => {
    const message = this.createChatBotMessage(reply);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Call backend API
  async handleMessageToServer(message) {
    try {
      // const res = await fetch("http://localhost:5000/api/chat", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ message }),
      // });

      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      this.handleBotReply(data.reply);
    } catch (error) {
      this.handleBotReply("⚠️ Sorry, server not responding.");
    }
  }
}

export default ActionProvider;
