import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => scrollToSection('#top')}>
        Grace Christian School
      </div>
      <div className={`menu-toggle ${open ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${open ? 'active' : ''}`}>
        <li onClick={() => scrollToSection('#overview')}>Overview</li>
        <li onClick={() => scrollToSection('#schedule')}>Schedule</li>
        <li onClick={() => scrollToSection('#locations')}>Locations</li>
        <li onClick={() => scrollToSection('#faq')}>FAQ</li>
        <li onClick={() => scrollToSection('#apply')}>Apply</li>
      </ul>
    </nav>
  );
}
