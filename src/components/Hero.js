import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/FAWZ_International-Exchange-Program_Host-Family.jpg';

export default function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="overlay">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Bring the World to Your Home
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.3 }}
        >
          Host a Taiwanese Student | July 5-13, 2025 | Grace Christian School
        </motion.p>
        <motion.a
          href="#contact"
          className="cta-button"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        >
          Become a Host Family
        </motion.a>
      </div>
    </div>
  );
}
