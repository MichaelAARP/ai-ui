import './styles/AarpHeader.css';

const AarpHeader = () => (
  <header className="aarp-header">
    {/* Top Bar */}
    <div className="aarp-top-bar">
      <div className="aarp-top-left">
  {/* AARP Logo (white) */}
  <svg
    width="120px"
    height="30px"
    viewBox="0 0 120 30"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-label="AARP logo"
  >
    <defs>
      <polygon id="path-1" points="0 0.879 114.9137 0.879 114.9137 26 0 26"></polygon>
      <polygon id="path-3" points="0.9665 0.8791 6 0.8791 6 5.9801 0.9665 5.9801"></polygon>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(0.000000, 2.000000)">
        <g transform="translate(0.000000, 0.120700)">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1"></use>
          </mask>
          <path
            fill="white"
            mask="url(#mask-2)"
            d="M20.0337,21.257 C20.0547,21.254 20.0787,21.249 20.0967,21.245 L18.3397,26 L18.2457,26 L11.4627,26 L11.3677,26 L13.0657,21.929 L13.1247,21.929 C13.5987,21.929 16.7817,21.903 20.0387,21.245 Z M114.9137,9.716 C114.9137,15.092 110.6657,18.551 103.6667,18.551 L99.4557,18.551 L99.4557,26 L80.4377,26 L72.7637,15.884 L72.7637,26 L54.4187,26 L52.4047,20.449 C52.2737,20.423 50.2277,20.038 47.8077,20.038 C45.3967,20.038 43.2587,20.415 43.1387,20.437 L41.0717,26 L31.7187,26 L30.1937,21.776 C32.4847,22.346 34.2417,23.284 35.1167,23.804 L35.5047,22.849 C34.0927,22.01 30.1457,20.012 24.4837,20.012 C20.1007,20.012 17.3147,21.081 12.7627,21.081 C5.3667,21.081 0.2667,17.481 -0.0003,17.302 L1.9657,12.498 C2.4747,12.831 7.3917,16.006 13.0547,16.006 C14.0167,16.006 14.8417,15.956 15.6087,15.879 L21.7497,0.879 L22.6287,0.879 L27.6477,0.879 L31.9567,0.879 L38.0337,16.633 L44.4667,0.879 L54.6877,0.879 L63.6317,24.063 L63.6317,0.879 L75.8507,0.879 C84.1597,0.879 88.2297,4.692 88.2297,9.716 C88.2297,14.745 84.2727,16.685 83.1737,17.184 L90.3317,24.969 L90.3317,0.879 L103.6667,0.879 C111.0397,0.879 114.9137,4.612 114.9137,9.716 Z M27.9127,15.457 L25.1087,7.722 L22.3607,15.131 C22.8267,15.114 23.3227,15.103 23.8597,15.103 C26.0877,15.103 27.7347,15.423 27.9127,15.457 Z M50.6057,15.3 L47.8077,7.819 L44.9587,15.3 C45.0897,15.283 46.6227,15.106 47.8077,15.106 C49.0727,15.106 50.4697,15.278 50.6057,15.3 Z M78.8427,9.716 C78.8427,7.222 77.5867,5.02 74.1057,5.02 L72.7637,5.02 L72.7637,14.394 L74.1057,14.394 C77.2387,14.394 78.8427,12.616 78.8427,9.716 Z M105.5247,9.716 C105.5247,6.983 104.0747,5.02 101.3087,5.02 L99.4557,5.02 L99.4557,14.394 L101.3087,14.394 C103.9067,14.394 105.5247,12.638 105.5247,9.716 Z"
          />
        </g>
        <g transform="translate(114.000000, 0.120700)">
          <mask id="mask-4" fill="white">
            <use xlinkHref="#path-3"></use>
          </mask>
          <path
            fill="white"
            mask="url(#mask-4)"
            d="M3.5005,0.8791 C4.8915,0.8791 6.0005,2.0101 6.0005,3.4251 C6.0005,4.8611 4.8915,5.9801 3.4875,5.9801 C2.0975,5.9801 0.9665,4.8611 0.9665,3.4251 C0.9665,2.0101 2.0975,0.8791 3.4875,0.8791 Z M3.0125,4.9051 L2.5605,4.9051 L2.5605,2.0661 C2.7975,2.0331 3.0235,1.9991 3.3645,1.9991 C3.7935,1.9991 4.0765,2.0891 4.2475,2.2131 C4.4145,2.3371 4.5055,2.5301 4.5055,2.8021 C4.5055,3.1751 4.2565,3.4011 3.9525,3.4921 C4.1995,3.5601 4.3705,3.7851 4.4265,4.2041 C4.4955,4.6461 4.5625,4.8151 4.6085,4.9051 L4.1325,4.9051 C4.0645,4.8151 3.9965,4.5561 3.9405,4.1821 C3.8735,3.8191 3.6915,3.6841 3.3305,3.6841 L3.0125,3.6841 Z"
          />
        </g>
      </g>
    </g>
  </svg>
</div>
      <div className="aarp-top-right">
        <a href="#">Membership & Benefits</a>
        <a href="#">Members Edition</a>
        <a href="#" className="rewards-link">
          <span className="star-icon">★</span> AARP Reward Points: 1,500 POINTS
        </a>
        <a href="#" className="member-info">
          Hi Member
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="gray"
  viewBox="0 0 24 24"
  className="profile-icon"
>
  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
</svg>
        </a>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="aarp-bottom-bar">
      <div className="aarp-bottom-left">
        <a href="#">Health</a>
        <a href="#">Money</a>
        <a href="#">Work & Jobs</a>
        <a href="#">Advocacy</a>
        <a href="#">Social Security</a>
        <a href="#">Games</a>
        <a href="#">Travel</a>
        <a href="#">More...</a>
      </div>
      <div className="aarp-bottom-right">
        <a href="#">AARP EN ESPANOL</a>
        <span className="divider" />
        <a href="#">
          Help <span className="question-icon">?</span>
        </a>
        <span className="divider" />
        <a href="#">
          <span className="search-icon">🔍</span>
        </a>
      </div>
    </div>
  </header>
);

export default AarpHeader;