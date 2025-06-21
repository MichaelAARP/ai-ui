import './styles/AiChat.css';
import meredithImg from '../assets/meredith.png'; // adjust path if needed
import React from 'react'

const AiChat = () => (
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

    <div className="ai-chat-placeholder">
      {React.createElement('div', {
        style: { 
          width: '100%', 
          height: '600px', 
          border: '1px solid #ddd', 
          borderRadius: '8px',
          overflow: 'hidden'
        }
      }, 
        React.createElement('iframe', {
          src: 'https://demchat.agetechcollaborative.org',
          style: {
            width: '100%',
            height: '100%',
            border: 'none',
          },
          title: 'Chainlit Chat'
        })
      )}
    </div>
  </div>
);

export default AiChat;