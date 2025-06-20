import './styles/AiChat.css';
import meredithImg from '../assets/meredith.png';
import { useChatSession, useChatMessages, useChatInteract } from '@chainlit/react-client';
//import '@chainlit/react-client/dist/index.css';
import { useEffect, useRef } from 'react';

const AiChat = () => {
  const { connect, disconnect } = useChatSession();
  const { messages } = useChatMessages();
  const { sendMessage } = useChatInteract();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    connect({ userEnv: { username: 'User' } });
    return () => {
      disconnect();
    };
  }, []);

  return (
    <div className="ai-chat-wrapper">
      <div className="ai-chat-header">
        <div className="ai-chat-text">
          <h2 className="ai-chat-title">Doc Meredith, Caregiving Advocate</h2>
          <p className="ai-chat-subtitle">
            Meredith is a caregiving advocate here to help with your questions.
          </p>
        </div>
        <div className="ai-chat-image">
          <img src={meredithImg} alt="Doc Meredith" />
        </div>
      </div>

      <div className="ai-chat-container">
        {(messages ?? []).map((msg) => (
          <div key={msg.id ?? `${msg.type ?? 'msg'}-${(msg.output ?? '[No content]').slice(0, 10)}`} className="chat-message">
            <strong>{msg.type === 'user_message' ? 'You' : 'Meredith'}: </strong>
            {msg.output ?? '[No content]'}
          </div>
        ))}

        <div className="chat-input">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask Meredith..."
            onKeyDown={(e) => {
              if (e.key === 'Enter' && inputRef.current) {
                const value = inputRef.current.value.trim();
                if (value) {
                  sendMessage({
                    input: value,
                    type: 'user_message',
                    name: 'user',
                    output: ''
                  });
                  inputRef.current.value = '';
                }
              }
            }}
          />
          <button onClick={() => {
            if (inputRef.current) {
              const value = inputRef.current.value.trim();
              if (value) {
                sendMessage({
                  input: value,
                  type: 'user_message',
                  name: 'user',
                  output: ''
                });
                inputRef.current.value = '';
              }
            }
          }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiChat;