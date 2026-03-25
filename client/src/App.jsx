import React from 'react';
import Hero from './components/Hero';
import Trust from './components/Trust';
import HowItWorks from './components/HowItWorks';
import CourseExperience from './components/CourseExperience';
import LiveTrading from './components/LiveTrading';
import Community from './components/Community';
import Philosophy from './components/Philosophy';
import DashboardPreview from './components/DashboardPreview';
import Pricing from './components/Pricing';
import Founder from './components/Founder';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Trust />
      <HowItWorks />
      <CourseExperience />
      <LiveTrading />
      <Community />
      <Philosophy />
      <DashboardPreview />
      <Pricing />
      <Founder />
      <FooterCTA />
    </div>
  );
}

export default App;
