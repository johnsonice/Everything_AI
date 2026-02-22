export function MessageList({ messages }) {
  return (
    <div className="message-list" role="log" aria-live="polite">
      {messages.length === 0 && (
        <p className="message-list__empty">No messages yet. Ask something below.</p>
      )}
      {messages.map((msg) => (
        <div key={msg.id} className={`message message--${msg.role}`}>
          <span className="message__role">{msg.role === 'user' ? 'You' : 'Assistant'}</span>
          <div className="message__content">{msg.content}</div>
        </div>
      ))}
    </div>
  );
}
