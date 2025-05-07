import React, { useState } from 'react';
import './DailySchedule.css';
import AnimatedSection from './AnimatedSection';

const schedule = [
  {
    day: 'Sat (July 5)',
    event: '✈️ Students arrive in San Diego.\nMeet your student and enjoy a welcome dinner together. Pickup time will be confirmed by staff.',
  },
  {
    day: 'Sun (July 6)',
    event: '🌊 A fun-filled day at SeaWorld San Diego.\nPickup time: 6:00 PM. Great night to ask about their favorite animal!',
  },
  {
    day: 'Mon (July 7)',
    event: '📚 Morning classes + 🌲 afternoon hike at Torrey Pines.\nPickup time: 6:00 PM. A relaxing evening is perfect after hiking.',
  },
  {
    day: 'Tue (July 8)',
    event: '📚 Morning classes + 🏛️ historic Old Town tour in the afternoon.\nPickup time: 6:00 PM. Try sharing something about your family traditions!',
  },
  {
    day: 'Wed (July 9)',
    event: '📚 Morning classes + 🎓 campus tour at UCSD in the afternoon.\nPickup time: 6:00 PM. Chat about future goals and schools!',
  },
  {
    day: 'Thu (July 10)',
    event: '📚 Morning classes + 🛍️ shopping trip to UTC Mall.\nPickup time: 6:00 PM. Ask them to show off their favorite find!',
  },
  {
    day: 'Fri (July 11)',
    event: '📚 Morning classes + 🍔 Lake Poway BBQ with local students.\nPickup time: 6:00 PM. Celebrate the week with a cozy home evening.',
  },
  {
    day: 'Sat (July 12)',
    event: '🦓 All-day adventure at San Diego Safari Zoo.\nPickup time: 4:00 PM. Perfect time for one last dinner and memories!',
  },
  {
    day: 'Sun (July 13)',
    event: '✈️ Departure in the morning to USD.\nSay goodbye and thank you for being part of their unforgettable journey!',
  },
];

export default function DailySchedule() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AnimatedSection>
      <section className="daily-schedule" id="schedule">
      <h2>📅 Student Weekly Schedule</h2>
      <p className="caption">
        Here's what your hosted student will be doing each day! Daytime activities are fully managed by our team — but evenings are a great time to share meals, stories, and culture at home.
      </p>
      <div className="tabs">
        {schedule.map((item, index) => (
          <button
            key={index}
            className={index === activeIndex ? 'tab active' : 'tab'}
            onClick={() => setActiveIndex(index)}
          >
            {item.day}
          </button>
        ))}
      </div>
      <div className="event">
        {schedule[activeIndex].event.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </section>
    </AnimatedSection>
  );
}
