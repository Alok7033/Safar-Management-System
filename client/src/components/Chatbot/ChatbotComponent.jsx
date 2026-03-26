// 

import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "../../style/chatbot.css";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

function ChatbotComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Show chatbot only if opened */}
      {isOpen && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}

      {/* Floating toggle button */}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "💬"}
      </button>
    </div>
  );
}

export default ChatbotComponent;
