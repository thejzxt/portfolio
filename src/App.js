import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {loading ? <SplashScreen /> : (
        <>
          <Navbar />
          <Home />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;