import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-header">
        <h2>Unfair Advantage, Simplified</h2>
        <p>Choose the tier that fits your dedication level.</p>
      </div>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Free Starter</h3>
          <p className="price">$0<span>/mo</span></p>
          <ul className="features">
            <li>Basic Video Course</li>
            <li>Weekly Newsletter</li>
            <li>Community Access (Read-only)</li>
          </ul>
          <button className="btn-outline">Start Free</button>
        </div>

        <div className="pricing-card pro">
          <div className="popular-badge">Most Popular</div>
          <h3>Pro Trader</h3>
          <p className="price">$99<span>/mo</span></p>
          <ul className="features">
            <li>Full Advanced Curriculum</li>
            <li>Daily Live Trading Room</li>
            <li>Real-time Discord Chat</li>
            <li>Trade Journal Analytics</li>
          </ul>
          <button className="btn-primary">Get Pro Access</button>
        </div>

        <div className="pricing-card">
          <h3>Elite Mentorship</h3>
          <p className="price">$499<span>/mo</span></p>
          <ul className="features">
            <li>Everything in Pro</li>
            <li>1-on-1 Bi-weekly Coaching</li>
            <li>Direct DM Access</li>
            <li>Custom Trade Plan Review</li>
          </ul>
          <button className="btn-outline">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
