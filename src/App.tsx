import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import CDPSelector from "./components/CDPSelector";
import SuggestedQuestions from "./components/SuggestedQuestions";
import { Message } from "./types";
import { generateResponse } from "./utils/chatUtils";
import { Bot } from "lucide-react";

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      role: "assistant",
      content:
        "Hello! I can help you with questions about Customer Data Platforms like Segment, mParticle, Lytics, and Zeotap. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [selectedCDP, setSelectedCDP] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const responseContent = generateResponse(content);
      const assistantMessage: Message = {
        id: uuidv4(),
        role: "assistant",
        content: responseContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    }, 500);
  };

  const handleSelectCDP = (cdpId: string) => {
    setSelectedCDP(cdpId === selectedCDP ? null : cdpId);
  };

  const handleSelectQuestion = (question: string) => {
    handleSendMessage(question);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex gap-2 items-center justify-center">
          <Bot />
          <h1 className="text-xl font-bold text-gray-800 text-center">
            CDP Chatbot
          </h1>
        </div>

        <p className="text-sm text-gray-500 text-center">
          Wondering how Segment, mParticle, Lytics, or Zeotap work? Ask me!
        </p>
      </header>

      <div className="p-4 flex flex-col items-center">
        <CDPSelector selectedCDP={selectedCDP} onSelectCDP={handleSelectCDP} />
        <SuggestedQuestions onSelectQuestion={handleSelectQuestion} />
      </div>

      <div className="flex-grow overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
