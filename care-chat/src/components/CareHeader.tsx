import './styles/CareHeader.css';

const CareHeader = () => (
  <header className="care-header">
    <div className="care-header-container">
      <h1 className="care-title">Care Central</h1>
      <nav className="care-nav">
        <span className="care-nav-item">Resources</span>
        <span className="care-nav-item">About Us</span>
      </nav>
    </div>
  </header>
);

export default CareHeader;