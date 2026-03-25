import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
  return (
    <section className="philosophy">
      <div className="philosophy-header">
        <h2 className="gradient-text">Trade with a Clear Mind</h2>
        <p>Success in the markets isn't about predicting the next tick. It's about mental fortitude.</p>
      </div>
      
      <div className="philosophy-grid">
        <div className="philosophy-card">
          <div className="p-icon">01</div>
          <h3>Discipline <br/><span>over</span> Emotion</h3>
          <p>We eliminate fear and greed by relying strictly on data-driven confluences and predefined execution rules.</p>
        </div>
        <div className="philosophy-card">
          <div className="p-icon">02</div>
          <h3>Process <br/><span>over</span> Profit</h3>
          <p>Money is a byproduct of doing the right things repeatedly. We focus intensely on trading well, not the PnL.</p>
        </div>
        <div className="philosophy-card">
          <div className="p-icon">03</div>
          <h3>Consistency <br/><span>over</span> Luck</h3>
          <p>Anyone can get lucky on a single trade. We build the systems required to compound capital over decades.</p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
