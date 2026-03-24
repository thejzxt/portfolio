import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section 
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>

      <p>
        I build things that work — full-stack applications that blend clean frontend UX with solid backend logic and AI-driven features.

Currently in my final year of B.Tech Information Technology at CUSAT, I've spent the last two years pushing beyond coursework to build real, functional products: an AI-powered infant monitoring system, an emotion-detection music player, and a multi-role job portal — all shipped end-to-end by me.

My stack: React & React Native for cross-platform interfaces, Node.js & Django for backend APIs, and Python when I need to wire in ML or data processing. I've recently added TypeScript, REST API design, and JWT authentication to my toolkit.

I care about developer experience — readable code, logical architecture, and features that solve actual user problems rather than demo well in interviews.
      </p>
    </motion.section>
  );
}

export default About;