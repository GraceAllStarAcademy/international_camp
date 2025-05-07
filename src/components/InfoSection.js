import React from 'react';
import './InfoSection.css';
import AnimatedSection from './AnimatedSection';

export default function InfoSection() {
  return (
    <AnimatedSection>
      <section className="info" id="overview">
        <h2>📋 Program Overview</h2>
        <ul>
          <li><strong>Dates:</strong> July 5 (Sat) - July 13 (Sun), 2025</li>
          <li><strong>Meals:</strong> Host provides breakfast & dinner</li>
          <li><strong>Beds:</strong> Twin bed per student or king for two</li>
          <li><strong>Compensation:</strong> $560 per student</li>
        </ul>
      </section>
    </AnimatedSection> 
  );
}
