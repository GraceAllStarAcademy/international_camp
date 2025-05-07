import React from 'react';
import './Contact.css';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  return (
    <AnimatedSection>
      <section className="contact" id="contact">
        <h2>📬 Get in Touch</h2>
        <p>
          Interested in hosting a student or have more questions? We’d love to hear from you!
        </p>
        <div className="contact-info">
          <p><strong>Jeff Yuan</strong></p>
          <p>Program Coordinator, Grace Christian School</p>
          <p>Email: <a href="mailto:yihengy@graceallstaracademy.com">yihengy@graceallstaracademy.com</a></p>
          <p>Phone: <a href="tel:8586499760">(858) 649-9760</a></p>
          <p>Location: San Diego, CA</p>
        </div>
      </section>
    </AnimatedSection>
  );
}
