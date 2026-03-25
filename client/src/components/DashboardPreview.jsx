import React from 'react';
import './DashboardPreview.css';

const DashboardPreview = () => {
  return (
    <section className="dashboard-preview">
      <div className="dash-header">
        <h2>Your Personal Edge</h2>
        <p>Built-in analytics and journal to track your progress.</p>
      </div>

      <div className="dash-mockup">
        {/* sidebar */}
        <div className="dash-sidebar">
          <div className="dash-logo">RT</div>
          <div className="dash-nav">
            <div className="d-icon active">📊</div>
            <div className="d-icon">📝</div>
            <div className="d-icon">🎓</div>
            <div className="d-icon">⚙️</div>
          </div>
        </div>
        {/* main area */}
        <div className="dash-main">
          <div className="dash-topbar">
            <span>Welcome back, Trader.</span>
            <div className="d-profile"></div>
          </div>
          
          <div className="dash-content">
            <div className="dash-stats-row">
              <div className="d-stat-card">
                <span>Win Rate</span>
                <h3>68.4%</h3>
                <span className="positive">↑ 2.1%</span>
              </div>
              <div className="d-stat-card">
                <span>Profit Factor</span>
                <h3>2.4</h3>
                <span className="positive">↑ 0.3</span>
              </div>
              <div className="d-stat-card">
                <span>Current Streak</span>
                <h3>4 Wins</h3>
              </div>
            </div>
            
            <div className="dash-bottom-row">
              <div className="d-chart-area">
                <h4>Equity Curve</h4>
                <div className="d-chart-mock">
                   <svg viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path d="M0,45 L10,40 L20,42 L30,30 L40,32 L50,20 L60,25 L70,10 L80,15 L90,5 L100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                   </svg>
                </div>
              </div>
              <div className="d-journal-area">
                <h4>Recent Trades</h4>
                <div className="d-trade win">
                  <span>NQ Long</span>
                  <span className="pnl">+$450</span>
                </div>
                <div className="d-trade loss">
                  <span>ES Short</span>
                  <span className="pnl">-$150</span>
                </div>
                <div className="d-trade win">
                  <span>GC Long</span>
                  <span className="pnl">+$200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
