import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: " Safar Assistant ",
  initialMessages: [createChatBotMessage("Hi 👋 I'm Safar. How can I help you today?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#007bff",
      color: "#333",
      borderRadius: "16px",
    },
    chatButton: {
      backgroundColor: "#007bff",
    },
  },
};

export default config;

