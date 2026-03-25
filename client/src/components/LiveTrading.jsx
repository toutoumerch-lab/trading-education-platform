import React from 'react';
import './LiveTrading.css';

const LiveTrading = () => {
  return (
    <section className="live-trading">
      <div className="live-content">
        <h2>Watch Real Trades in Real Time.</h2>
        <h2 className="gradient-text">No Edits. No Filters.</h2>
        <p>Experience the raw reality of professional trading. See exactly how a funded trader navigates volatility, manages live risk, and executes the strategy you learn in the curriculum.</p>
        <ul className="features-list">
          <li>Daily pre-market analysis</li>
          <li>Live execution and commentary</li>
          <li>Q&A during slow periods</li>
          <li>Post-session debriefs</li>
        </ul>
        <button className="btn-primary" style={{marginTop: '2rem'}}>Join the Next Session</button>
      </div>
      
      <div className="video-preview">
        <div className="video-player-mockup">
          <div className="player-header">
            <span className="live-badge">● LIVE</span>
            <span className="viewer-count">1,248 watching</span>
          </div>
          <div className="play-button-container">
            <div className="play-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="player-controls">
            <div className="progress-bar"><div className="progress-fill"></div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTrading;
