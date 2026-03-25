import React from 'react';
import './FooterCTA.css';
import logoUrl from '../assets/logo.png';

const FooterCTA = () => {
  return (
    <footer className="footer-cta">
      <div className="cta-content">
        <h2>Start Your Trading Journey Today</h2>
        <p>Stop guessing. Start executing with precision.</p>
        <button className="btn-primary large-btn">Claim Your Free Account</button>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo-container">
          <img src={logoUrl} alt="Logo" className="footer-logo" />
          <div className="logo gradient-text">Robert Trades Futures</div>
        </div>
        <p>© 2026 Robert Trades Futures. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
