import React from 'react';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <InfoSection />
      <Benefits />
      <Contact />
    </div>
  );
}

export default App;
