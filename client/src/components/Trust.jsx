import React from 'react';
import './Trust.css';

const Trust = () => {
  return (
    <section className="trust">
      <div className="stats-container">
        <div className="stat-item">
          <h2>5,000+</h2>
          <p>Traders Trained</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </div>
      
      <div className="testimonials">
        <div className="testimonial-card">
          <p className="quote">"The clarity and systematic approach completely changed my perspective on the markets. Found my edge."</p>
          <div className="author">
            <div className="avatar">JD</div>
            <div>
              <p className="name">James D.</p>
              <p className="role">Funded Trader</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="quote">"No noise, no hype. Just pure, actionable education that actually translates to results."</p>
          <div className="author">
            <div className="avatar">SK</div>
            <div>
              <p className="name">Sarah K.</p>
              <p className="role">Pro Member</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
