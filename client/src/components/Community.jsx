import React from 'react';
import './Community.css';

const Community = () => {
  return (
    <section className="community" id="community">
      <div className="community-header">
        <h2 className="gradient-text">Trade Together. Win Together.</h2>
        <p>Join a network of dedicated traders who share setups, insights, and accountability.</p>
      </div>

      <div className="discord-mockup">
        <div className="discord-sidebar">
          <div className="server-name">Robert Trades Futures</div>
          <div className="channels">
            <div className="channel active"># live-trading</div>
            <div className="channel"># trade-setups</div>
            <div className="channel"># daily-review</div>
            <div className="channel"># psychology</div>
          </div>
        </div>
        <div className="discord-chat">
          <div className="chat-header">
            <h3># live-trading</h3>
            <span className="online-count">● 1,200 Online</span>
          </div>
          <div className="chat-messages">
            <div className="message">
              <div className="msg-avatar blue"></div>
              <div className="msg-content">
                <span className="msg-name">Alex R. <span className="msg-time">10:32 AM</span></span>
                <p>ES hitting the key liquidity zone we marked pre-market. Watching for absorption here.</p>
              </div>
            </div>
            <div className="message">
              <div className="msg-avatar admin"></div>
              <div className="msg-content">
                <span className="msg-name coach">Robert Trades Futures <span className="msg-time">10:33 AM</span></span>
                <p>Exactly. Wait for the footprint confirmation before entry. Don't front run it.</p>
              </div>
            </div>
            <div className="message">
              <div className="msg-avatar pink"></div>
              <div className="msg-content">
                <span className="msg-name">Sam K. <span className="msg-time">10:35 AM</span></span>
                <p>Got the signal. Long from 4120. Risk mapped below the sweep.</p>
              </div>
            </div>
          </div>
          <div className="chat-input-area">
            <div className="chat-input">Message #live-trading...</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
