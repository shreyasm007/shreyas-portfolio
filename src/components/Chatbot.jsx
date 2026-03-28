import { useEffect } from "react";

// myJarvis backend URL - update this when deploying to production
const JARVIS_API_URL =
  import.meta.env.VITE_JARVIS_API_URL || "http://localhost:8000";

export default function Chatbot() {
  useEffect(() => {
    // Inject the myJarvis chat widget script
    const script = document.createElement("script");
    script.src = `${JARVIS_API_URL}/widget/chat-widget.js`;
    script.async = true;
    script.setAttribute("data-api-url", JARVIS_API_URL);
    script.setAttribute("data-title", "Chat with Shreyas");
    script.setAttribute("data-primary-color", "#9333ea");

    document.body.appendChild(script);

    return () => {
      // Remove the script
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Clean up widget DOM elements injected by chat-widget.js
      document
        .querySelectorAll(".rag-chat-bubble, .rag-chat-window")
        .forEach((el) => el.remove());
      // Clean up injected style tags
      document.querySelectorAll("style").forEach((style) => {
        if (style.textContent && style.textContent.includes("rag-chat-widget")) {
          style.remove();
        }
      });
    };
  }, []);

  return null; // myJarvis widget handles its own UI
}
