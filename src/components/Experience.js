import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const experience = [
    {
      role: "Software Development Intern",
      company: "TouchQ Software Solutions Pvt. Ltd.",
      duration: "2025",
       desc: `
       Worked as a Software Development Intern at TouchQ Software Solutions 

• Contributed to the development of an internal web platform using HTML, CSS, PHP, Node.js, and MySQL  
• Designed and improved responsive UI components to enhance user experience  
• Worked on backend workflows, database operations, and debugging  
• Gained hands-on experience with the Software Development Life Cycle (SDLC), including analysis, development, testing, and deployment  
• Understood enterprise-level database design, data handling, optimization, and performance  
• Collaborated with the development team to understand real-world software engineering practices
`
    }
  ];

  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Experience</h2>

      <div className="experience-container">
        {experience.map((item, index) => (
          <div key={index} className="experience-card">
            <h3>{item.role}</h3>
            <h4>{item.company}</h4>
            <span>{item.duration}</span>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </motion.section>
  );
}

export default Experience;