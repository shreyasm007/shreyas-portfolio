// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define a named function for handling window load
    const handleLoad = () => setLoading(false);

    // Add load event listener
    window.addEventListener('load', handleLoad);

    // Fallback: remove spinner after 10 seconds if load event is not fired
    const timeoutId = setTimeout(() => setLoading(false), 2000);

    // Clean up event listener and timeout on unmount
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-primary">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <ThemeToggle />
          <Chatbot />
          <ParticleBackground />
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
