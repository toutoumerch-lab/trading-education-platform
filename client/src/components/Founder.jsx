import React from 'react';
import './Founder.css';

const Founder = () => {
  return (
    <section className="founder">
      <div className="founder-content">
        <h2>From Struggle to Strategy</h2>
        <p className="founder-story">
          "I blew three accounts before realizing that trading wasn't about perfectly predicting the market. It was about knowing myself, managing my risk, and flawlessly executing a proven edge without emotion."
        </p>
        <p className="founder-bio">
          After a decade of professional trading, I built this platform because I was tired of the noise. No rented lambos. No 'guaranteed' alerts. Just the raw truth of what it takes to survive and thrive in these markets.
        </p>
        <div className="founder-signature">
          <div className="f-avatar"></div>
          <div>
            <h4>Robert</h4>
            <span>Head Trader & Founder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
