import React, { useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
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
        <img
  src="/ME.jpeg"
  alt="profile"
  className="profile-img"
  onClick={() => setIsOpen(true)}
/>
      </motion.div>

      {/* RIGHT TEXT */}
      <motion.div 
        className="right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Hello, I'm Justin</h1>
        <h2>Full-Stack Developer</h2>
        <p>Transforming ideas into modern web applications and smart AI solutions</p>
      </motion.div>
{isOpen && (
  <div className="image-modal" onClick={() => setIsOpen(false)}>
    <img src="/ME.jpeg" alt="zoom" className="zoomed-img" />
  </div>
)}
    </section>
  );
}

export default Home;