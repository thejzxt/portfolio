import React, { use, useState } from "react";
import { motion } from "framer-motion";

function Skills() {
    const [activeSkill, setActiveSkill] = useState(null);
const skills = {
  Frontend: [
    { name: "React.js", usedIn: ["Emotion-Based Music Player"] },
    { name: "JavaScript", usedIn: ["Online Job Portal", "E-Learning Platform",] },
    { name: "HTML5", usedIn: ["Online Job Portal", "E-Learning Platform"] },
    { name: "CSS", usedIn: ["Online Job Portal", "E-Learning Platform"] }
  ],

  Mobile: [
    { name: "React Native", usedIn: ["Infant Care Assistant"] },
    { name: "Android (Java, XML)", usedIn: ["Android Fitness App"] }
  ],

  Backend: [
    { name: "Node.js", usedIn: ["Emotion-Based Music Player", "Infant Care Assistant"] },
    { name: "Django", usedIn: ["Emotion-Based Music Player"] },
    { name: "PHP", usedIn: ["Online Job Portal", "E-Learning Platform"] }
  ],

  "AI / ML": [
    { name: "Python", usedIn: ["Emotion-Based Music Player", "Infant Care Assistant"] },
    { name: "TensorFlow", usedIn: ["Emotion-Based Music Player", "Infant Care Assistant"] },
    { name: "OpenCV", usedIn: ["Emotion-Based Music Player"] }
  ],

  Databases: [
    { name: "MongoDB", usedIn: ["Infant Care Assistant"] },
    { name: "MySQL", usedIn: ["Online Job Portal"] },
    { name: "SQLite", usedIn: ["Android Fitness App", "Emotion-Based Music Player"] }
  ],

  Tools: [
    { name:"Git & GitHub", usedIn: [] },
    { name:"VSCode", usedIn: ["Online Job Portal", "E-Learning Platform", "Emotion-Based Music Player", "Infant Care Assistant"] },
    { name:"Android Studio", usedIn: ["Android Fitness App"] }
  ]
};

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

   {Object.entries(skills).map(([category, items], index) => (
  <div key={index} className="skill-group">
    <h3>{category}</h3>

    <div className="skills-container">
      {items.map((skill, i) => (
        <div
          key={i}
          className={`skill-card ${activeSkill === skill.name ? "active" : ""}`}
          onClick={() =>
            setActiveSkill(activeSkill === skill.name ? null : skill.name)
          }
        >
          {skill.name}

          {activeSkill === skill.name && (
            <div className="skill-extra">
              {skill.usedIn.map((proj, idx) => (
                <p key={idx}>{proj}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
))}
    </section>
  );
}

export default Skills;