import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutMe = ({ scrollToSection, projectsRef, contactRef }) => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center text-center bg-light px-3 py-5">
      <img
        src="https://res.cloudinary.com/duw8lbca7/image/upload/v1745314841/IMG-20250421-WA0024_fart7l.jpg"
        alt="Abdulazeem Salau"
        className="mb-3 rounded-circle shadow"
        style={{
          width: 'clamp(140px, 25vw, 200px)',
          height: 'clamp(140px, 25vw, 200px)',
          objectFit: 'cover',
        }}
      />

      <h1 className="fw-bold">Abdulazeem Salau</h1>
      <p className="text-muted fs-5">Full-Stack Developer</p>

      <p className="text-center mb-4 px-2 px-md-5" style={{ maxWidth: '700px' }}>
        I'm Abdulazeem Salau, a Full-Stack Developer passionate about creating web applications. I specialize in both front-end and back-end development using technologies like React, Node.js, and MongoDB. I enjoy solving problems, building user-friendly interfaces, and writing clean, scalable code. I'm always eager to learn new technologies and work on projects that make an impact.
      </p>

      <div className="d-flex justify-content-center my-3 gap-3">
        <a href="https://github.com/shabbazanwar" target="_blank" rel="noreferrer">
          <FaGithub size={28} className="text-dark hover-icon" />
        </a>
        <a href="https://linkedin.com/in/abdulazeem-salau-47b86a341" target="_blank" rel="noreferrer">
          <FaLinkedin size={28} className="text-dark hover-icon" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
          <FaTwitter size={28} className="text-dark hover-icon" />
        </a>
      </div>

      <div className="mt-3 d-flex flex-column flex-sm-row gap-2 w-100 justify-content-center px-4" style={{ maxWidth: '360px' }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => scrollToSection?.(projectsRef)}
        >
          View My Work
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => scrollToSection?.(contactRef)}
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
