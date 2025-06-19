import './styles/AiChat.css';
import meredithImg from '../assets/meredith.png'; // adjust path if needed

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
      <p>[ Chat Window Placeholder ]</p>
    </div>
  </div>
);

export default AiChat;