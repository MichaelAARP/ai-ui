import './Page.css';
import CareHeader from '../components/CareHeader';
import CareFooter from '../components/CareFooter';
import AiChat from '../components/AiChat';

const CarePage = () => (
  <div className="page-container">
    <CareHeader />
    <main className="page-main">
      <AiChat />
    </main>
    <CareFooter />
  </div>
);

export default CarePage;