import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>

      <p>
  Email:{" "}
  <a href="mailto:justincs2724@email.com">
    justincs2724@email.com
  </a>
</p>

      <p>
        GitHub: 
        <a href="https://github.com/thejzxt" target="_blank">
          thejzxt
        </a>
      </p>

      <p>
        LinkedIn: 
        <a href="https://www.linkedin.com/in/justin-cs/" target="_blank">
          Justin CS
        </a>
      </p>

      {/* RESUME BUTTON 🔥 */}
      <a href="/resume.pdf" download>
        <button className="resume-btn">Download Resume</button>
      </a>
    </section>
  );
}

export default Contact;