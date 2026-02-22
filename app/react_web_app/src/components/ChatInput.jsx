import { useState } from 'react';

export function ChatInput({ onSend, disabled, placeholder }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
    setValue('');
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <button type="button" className="chat-input__attach" aria-label="Add attachment" title="Add attachment">
        +
      </button>
      <textarea
        className="chat-input__field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder ?? 'Type a message...'}
        rows={2}
        disabled={disabled}
        aria-label="Chat message"
      />
      <button type="submit" className="chat-input__submit" disabled={disabled || !value.trim()} aria-label="Send">
        Send
      </button>
    </form>
  );
}
