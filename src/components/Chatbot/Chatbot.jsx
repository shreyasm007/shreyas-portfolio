import { useState, useEffect, useRef } from "react";
import { FiMessageSquare, FiX, FiSend, FiCpu } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { chatbotConfig } from "../../constants/data";
import "./Chatbot.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: chatbotConfig.welcomeMessage }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  
  // Only show toggle in Dev Mode
  const isDev = import.meta.env.DEV;
  const [isLocal, setIsLocal] = useState(isDev); 
  const [showTooltip, setShowTooltip] = useState(false);
  
  const currentApiUrl = isLocal ? chatbotConfig.localApiUrl : chatbotConfig.prodApiUrl;
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Check for first-time visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedChat");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && showTooltip) {
      setShowTooltip(false);
      localStorage.setItem("hasVisitedChat", "true");
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    setIsLoading(true);

    const updatedMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(updatedMessages);

    try {
      const response = await fetch(`${currentApiUrl}/api/v1/chat/stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          conversation_id: conversationId,
        }),
      });

      if (!response.ok) throw new Error("Failed to connect to assistant");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";
      
      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              
              if (data.error) {
                assistantContent = data.error;
              } else if (data.content) {
                assistantContent += data.content;
              }

              if (data.is_final && data.conversation_id) {
                setConversationId(data.conversation_id);
              }

              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].content = assistantContent;
                return newMessages;
              });
            } catch (e) {
              // Ignore parse errors for chunks
            }
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "I'm sorry, I'm having trouble connecting right now. Please try again later." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="rag-chat-widget-container">
      {/* Onboarding Tooltip */}
      {showTooltip && !isOpen && (
        <div className="chat-onboarding-tooltip">
          <FiCpu className="tooltip-icon" /> {chatbotConfig.onboardingTooltip}
        </div>
      )}

      {/* Chat Bubble */}
      <button 
        className="rag-chat-bubble" 
        onClick={toggleChat}
        aria-label="Toggle Chat"
      >
        {isOpen ? <FiX /> : <FiMessageSquare />}
      </button>

      {/* Chat Window */}
      <div className={`rag-chat-window ${isOpen ? "open" : "closed"}`}>
        <div className="rag-chat-header">
          <div className="rag-chat-header-info">
            <h3>Chat with Shreyas</h3>
            {isDev && (
              <button 
                className={`api-toggle ${isLocal ? 'local' : 'prod'}`}
                onClick={() => setIsLocal(!isLocal)}
                title={`Switch to ${isLocal ? 'Production' : 'Local'} API`}
                disabled={isLoading}
              >
                {isLocal ? '⚡ Local' : '🌐 Prod'}
              </button>
            )}
          </div>
          <button className="rag-chat-close" onClick={toggleChat} aria-label="Close Chat">
            <FiX />
          </button>
        </div>

        <div className="rag-chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`rag-chat-message ${msg.role}`}>
              {msg.role === "assistant" ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.content}
                </ReactMarkdown>
              ) : (
                msg.content
              )}
            </div>
          ))}
          {isLoading && messages[messages.length - 1].role === "user" && (
            <div className="rag-chat-message assistant typing">
              <span></span><span></span><span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="rag-chat-input-container">
          <input
            ref={inputRef}
            type="text"
            className="rag-chat-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask me anything..."
            maxLength={1000}
            disabled={isLoading}
          />
          <button 
            className="rag-chat-send" 
            onClick={handleSend}
            disabled={isLoading || !inputValue.trim()}
          >
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
}
