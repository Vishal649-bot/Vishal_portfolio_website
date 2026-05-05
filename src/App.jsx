// App.js
import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import './App.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="App">
      <CursorGlow mousePos={mousePos} />
      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <HeroSection 
        ref={el => sectionRefs.current['home'] = el}
        mousePos={mousePos}
        scrollToSection={scrollToSection}
      />
      <AboutSection 
        ref={el => sectionRefs.current['about'] = el}
      />
      <SkillsSection 
        ref={el => sectionRefs.current['skills'] = el}
        mousePos={mousePos}
      />
      <ProjectsSection 
        ref={el => sectionRefs.current['projects'] = el}
      />
      <ContactSection 
        ref={el => sectionRefs.current['contact'] = el}
      />
      <Footer />
    </div>
  );
}

export default App;