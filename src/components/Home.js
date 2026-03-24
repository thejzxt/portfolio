import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section id="home" className="home">

      {/* TOP DESIGN AREA */}
      <div className="top-design">
        <h1 className="big-name">JUSTIN</h1>
        <div className="top-line"></div>
      </div>

      {/* CENTER LINE */}
      <div className="center-line"></div>

      {/* LEFT IMAGE */}
      <motion.div 
        className="left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/ME.jpeg" alt="profile" />
      </motion.div>

      {/* RIGHT TEXT */}
      <motion.div 
        className="right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Hello, I'm Justin</h1>
        <h2>Web Developer</h2>
        <p>I build modern web apps and AI-based systems.</p>
      </motion.div>

    </section>
  );
}

export default Home;