import React from 'react';
import { motion } from 'framer-motion';
import './FloatingButton.css';

export default function FloatingButton() {
  return (
    <motion.a
      href="https://forms.gle/m4L6DKhfiGmnBL8f6"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-button"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Apply Now
    </motion.a>
  );
}
