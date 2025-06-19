import './Page.css';
import AarpHeader from '../components/AarpHeader';
import AarpFooter from '../components/AarpFooter';
import AiChat from '../components/AiChat';

const AarpPage = () => (
  <div className="page-container">
    <AarpHeader />
    <main className="page-main">
    <AiChat />
    </main>
    <AarpFooter />
  </div>
);

export default AarpPage;