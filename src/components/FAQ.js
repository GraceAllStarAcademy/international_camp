import React, { useState } from 'react';
import './FAQ.css';
import AnimatedSection from './AnimatedSection';

const questions = [
  {
    question: 'Do I need to speak Chinese?',
    answer: 'No, students are here to practice their English! Most communication will be in English.',
  },
  {
    question: 'Can I host more than one student?',
    answer: 'Yes, if you can provide a king-size bed or two separate twin-size beds.',
  },
  {
    question: 'What time will the students be home each day?',
    answer: 'They will return in the early evening after group activities and spend the night with your family.',
  },
  {
    question: 'Is there any financial compensation?',
    answer: 'Yes, you will receive $560 per student for the hosting period.',
  },
  {
    question: 'Do I need to drive the student anywhere?',
    answer: 'No, transportation is fully arranged by Grace Christian School during the program.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection>
      <section className="faq" id="faq">
        <h2>❓ Frequently Asked Questions</h2>
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggle(index)}>
              {item.question}
            </button>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </section>
    </AnimatedSection>
  );
}
