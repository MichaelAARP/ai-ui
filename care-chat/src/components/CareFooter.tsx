import './styles/CareFooter.css';

const CareFooter = () => (
  <footer className="care-footer">
    <div className="care-footer-top">
      <div className="care-footer-left">
        <a href="#" className="footer-benefits-link">Benefits</a>
      </div>
      <div className="care-footer-right">
        <a href="#">Home</a>
        <a href="#">Benefits</a>
        <a href="#">Benefits Overview</a>
        <a href="#">Workday Calendar</a>
        <a href="#">Our Approach</a>
        <a href="#">Legal</a>
      </div>
    </div>

    <hr className="care-divider" />

    <div className="care-footer-bottom">
      <div className="care-footer-left">
        <span className="footer-rights-text">All Rights Reserved</span>
      </div>
      <div className="care-footer-right">
        <a href="#" className="footer-secondary-link">Cookie Policy</a>
        <a href="#" className="footer-secondary-link">Accessibility</a>
      </div>
    </div>
  </footer>
);

export default CareFooter;