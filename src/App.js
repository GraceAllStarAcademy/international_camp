import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Benefits from './components/Benefits';
import DailySchedule from './components/DailySchedule';
import SchoolLocations from './components/SchoolLocations';
import FAQ from './components/FAQ';
import HostFamilyTips from './components/HostFamilyTips';
import ApplyReminder from './components/ApplyReminder';
import QRCodeSection from './components/QRCodeSection';
import Contact from './components/Contact';
import FloatingButton from './components/FloatingButton';
import BackToTopButton from './components/BackToTopButton';
import Footer from './components/Footer';
import './App.css';
import './components/Hero.css';

export default function App() {
  return (
    <div className="App" id="top">
      {/* <Navbar /> */}
      <Hero />
      <InfoSection />
      <Benefits />
      <DailySchedule />
      <SchoolLocations />
      <FAQ />
      <HostFamilyTips />
      <ApplyReminder />
      <QRCodeSection />
      <Contact />
      <FloatingButton />
      <BackToTopButton />
      <Footer />
    </div>
  );
}
