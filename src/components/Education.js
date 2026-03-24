import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const educationData = [
    {
      title: "B.Tech / Information Technology",
      place: "Cochin University of Science and Technology",
      year: "2022 - 2026",
      desc: "Focused on Computer Science, Web Development, and AI projects."
    },
    {
      title: "Higher Secondary",
      place: "GHSS Panjal",
      year: "2020 - 2022",
      desc: "Completed with focus on science and mathematics."
    }
  ];

  return (
    <motion.section
      id="education"
      className="education-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Education</h2>

      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3>{item.title}</h3>
            <h4>{item.place}</h4>
            <span>{item.year}</span>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </motion.section>
  );
}

export default Education;