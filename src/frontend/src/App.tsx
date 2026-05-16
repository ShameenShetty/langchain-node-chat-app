import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    console.log('Sending request to server...')
    
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setResponse("Thinking...");

    try {
      
      const res = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      console.log('Fetched response from server, parsing request...');
      const response = await res.json();
      
      if (response.data) {
        console.log('Success: Output from LLM on server:', response);
        setResponse(response.data);
      } else {
        setResponse("Error: Received an invalid response from the server.");
      }
    } catch (error) {
      console.error("Failed to connect to backend:", error);
      setResponse("Failed to connect to the backend server. Make sure it's running!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <h2>Gemini Playground</h2>
      
      {/* Input Form */}
      <form onSubmit={handleSendMessage} style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          disabled={isLoading}
          style={{ flex: 1, padding: "12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" }}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          style={{ padding: "12px 24px", borderRadius: "6px", border: "none", backgroundColor: "#0070f3", color: "white", fontSize: "16px", cursor: "pointer" }}
        >
          {isLoading ? "Thinking..." : "Send"}
        </button>
      </form>

      {/* AI Response Output Container */}
      {response && (
        <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", border: "1px solid #eaeaea", lineHeight: "1.6" }}>
          {/* ReactMarkdown intercepts the string and outputs pure, clean HTML formatting */}
          <ReactMarkdown>{response}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default App;