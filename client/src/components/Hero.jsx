import React from 'react';
import './Hero.css';
import logoUrl from '../assets/logo.png';
import TradingChart from './TradingChart';

const Hero = () => {
  return (
    <section className="hero">
      <header className="header">
        <div className="logo-container">
          <img src={logoUrl} alt="Logo" className="nav-logo" />
          <div className="logo gradient-text">Robert Trades Futures</div>
        </div>
        <nav>
          <a href="#courses">Courses</a>
          <a href="#community">Community</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </header>
      
      <div className="hero-main">
        <div className="hero-content">
          <h1>Master the Market with <br/><span className="gradient-text">Clarity and Discipline</span></h1>
          <p className="subtext">Learn professional trading without noise, hype, or guesswork</p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Free</button>
            <button className="btn-secondary">Watch Live Trading</button>
          </div>
        </div>

        <div className="hero-visual">
          <TradingChart />
        </div>
      </div>
      <div className="animated-waves"></div>
    </section>
  );
};

export default Hero;
