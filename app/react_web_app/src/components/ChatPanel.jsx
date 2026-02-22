import { useState, useCallback } from 'react';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { seedLegalQA } from '../data/casesData';

const DEMO_REPLY =
  'Demo mode: connect an API to get real responses. Set VITE_CHAT_API_URL to your chat endpoint (e.g. Streamlit/Flask/FastAPI) to enable AI.';

export function ChatPanel() {
  const [messages, setMessages] = useState(seedLegalQA);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_CHAT_API_URL;

  const sendMessage = useCallback(
    async (content) => {
      const userMsg = { id: crypto.randomUUID(), role: 'user', content };
      setMessages((prev) => [...prev, userMsg]);
      setLoading(true);
      try {
        if (apiUrl) {
          const res = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: content }),
          });
          const data = await res.json().catch(() => ({}));
          const reply =
            data.reply ?? data.response ?? data.text ?? data.message ?? DEMO_REPLY;
          setMessages((prev) => [
            ...prev,
            { id: crypto.randomUUID(), role: 'assistant', content: String(reply) },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { id: crypto.randomUUID(), role: 'assistant', content: DEMO_REPLY },
          ]);
        }
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: 'assistant',
            content: 'Request failed. Check VITE_CHAT_API_URL and CORS.',
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [apiUrl]
  );

  return (
    <div className="chat-panel">
      <header className="chat-panel__header">
        <h2>AI Legal Assistant</h2>
      </header>
      <MessageList messages={messages} />
      <ChatInput onSend={sendMessage} disabled={loading} placeholder="Enter your legal question..." />
    </div>
  );
}
