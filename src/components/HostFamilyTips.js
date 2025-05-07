import React from 'react';
import './HostFamilyTips.css';
import AnimatedSection from './AnimatedSection';

export default function HostFamilyTips() {
  return (
    <AnimatedSection>
        <section className="host-tips">
        <h2>🧭 Tips for First-Time Host Families</h2>

        <div className="tips-section">
            <h3>✅ Great Things to Do with Your Hosted Student:</h3>
            <ul>
            <li>🌮 Share a simple home-cooked American dinner</li>
            <li>🛒 Take them grocery shopping or to a local farmer’s market</li>
            <li>🎲 Play board or card games together in the evening</li>
            <li>🎥 Watch a family-friendly movie or take a neighborhood walk</li>
            <li>📖 Ask about their school, family, or hometown in Taiwan</li>
            <li>📸 Take photos together and build memories!</li>
            </ul>
        </div>

        <div className="tips-section">
            <h3>⚠️ Things to Avoid or Be Mindful Of:</h3>
            <ul>
            <li>⏰ Don't change their pickup or drop-off schedule — it's managed by the school</li>
            <li>🍻 Avoid offering alcohol or letting students use tobacco or vape products</li>
            <li>🐶 Let students know in advance if you have pets — some may have allergies or fears</li>
            <li>🗣️ Don't worry if their English isn't perfect — patience and simple language go a long way!</li>
            <li>📱 Avoid extended screen time or isolation — help them feel included</li>
            </ul>
        </div>

        <div className="tips-section">
            <h3>🌍 Be a Cultural Ambassador:</h3>
            <p>
            Your everyday routines can be fascinating for them! Involve your student in simple things like setting the table, sharing your morning coffee routine, or even attending church or a local event. Encourage conversation and let them practice English naturally — it makes all the difference.
            </p>
        </div>
        </section>
    </AnimatedSection>
  );
}
