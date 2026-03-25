import React from 'react';
import './CourseExperience.css';

const CourseExperience = () => {
  const courses = [
    {
      title: 'Order Flow Mastery',
      shortDesc: 'Read the tape like a professional.',
      fullDesc: 'Go beyond traditional candlesticks. Learn to read Level 2 data, footprint charts, and real-time order flow to anticipate institutional moves before they happen.',
      tags: ['Advanced', 'Day Trading']
    },
    {
      title: 'Risk Management',
      shortDesc: 'Protect your capital at all costs.',
      fullDesc: 'The secret to longevity isn\'t finding winning trades, it\'s surviving the losing ones. Master position sizing, drawdown management, and statistical expectancy.',
      tags: ['Essential', 'All Levels']
    },
    {
      title: 'Trading Psychology',
      shortDesc: 'Conquer your worst enemy: yourself.',
      fullDesc: 'Eliminate FOMO, revenge trading, and hesitation. Build the impenetrable mindset required to execute your edge ruthlessly and consistently.',
      tags: ['Mindset', 'All Levels']
    }
  ];

  return (
    <section className="course-experience" id="courses">
      <div className="section-header">
        <h2>Curriculum Engineered for Results</h2>
        <p>Comprehensive education designed to take you from amateur to consistently profitable.</p>
      </div>
      
      <div className="courses-container">
        {courses.map((course, idx) => (
          <div className="course-card" key={idx}>
            <div className="course-card-inner">
              <div className="course-front">
                <h3>{course.title}</h3>
                <p>{course.shortDesc}</p>
                <div className="tags">
                  {course.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                </div>
              </div>
              <div className="course-expanded">
                <h3>{course.title}</h3>
                <p className="full-desc">{course.fullDesc}</p>
                <button className="btn-outline">Explore Module</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseExperience;
