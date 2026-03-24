import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
  title: "Android Fitness App",
  tech: "Java, XML, Android Studio, SQLite",
  short: "Mobile fitness tracking application",
  full: "Developed an Android-based fitness application that helps users track workouts, monitor BMI, and manage their fitness journey. Implemented features such as user registration, login, profile management, workout search, and exercise viewing. Designed an admin panel to manage users and workout content efficiently. Built using Java for application logic, XML for UI design, and SQLite for local database management.",
  github: "https://github.com/thejzxt/Android-Fitness-App"
},

    {
  title: "Emotion-Based Music Player",
  tech: "React.js, Node.js, Python (AI), SQLite",
  short: "AI-driven emotion-aware music application",
  full: "Built a full-stack AI-powered music application that detects user emotions in real-time using facial recognition and dynamically plays mood-based songs. Implemented emotion detection using machine learning models and integrated it with a playlist recommendation system based on emotion and language preferences. Developed using React.js (frontend), Node.js (backend), Python for AI processing, and SQLite for efficient data storage and management.",
  github: "https://github.com/thejzxt/Emotion-based-music-player"
},
     {
  title: "Infant Care Assistant",
  tech: "React Native, Node.js, Python (AI), MongoDB",
  short: "AI-powered infant care mobile application",
  full: "Developed an AI-powered mobile application to assist parents in understanding and managing infant care. The system analyzes baby cries using machine learning models to predict reasons such as hunger, sleepiness, or discomfort. It includes features like feeding schedule management with alerts, cry history tracking, AI chatbot support, and emergency hospital locator. Built using React Native for the mobile interface, Node.js for backend services, Python for AI-based cry analysis, and MongoDB for data storage."
}
  ];

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            className={`project-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleCard(index)}
            layout
          >
            <h3>{item.title}</h3>
            <h4>{item.tech}</h4>

            <p>{item.short}</p>

           {activeIndex === index && (
  <motion.div
    className="extra"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <p>{item.full}</p>

    {/* SHOW BUTTON ONLY IF LINK EXISTS */}
   {item.github && (
  <a 
    href={item.github} 
    target="_blank" 
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
  >
    <button className="github-btn">GitHub ↗</button>
  </a>
)}
    
  </motion.div>
)}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;