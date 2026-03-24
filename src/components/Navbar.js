import React from 'react';

function Navbar() {
  return (
    <div className="navbar">

      {/* LEFT LOGO */}
      <div className="logo">Justin</div>

      {/* CENTER MENU */}
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

    </div>
  );
}

export default Navbar;