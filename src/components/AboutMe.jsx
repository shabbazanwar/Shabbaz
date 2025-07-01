import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100 bg-light px-3">
      <img
  src="https://res.cloudinary.com/duw8lbca7/image/upload/v1745314841/IMG-20250421-WA0024_fart7l.jpg"
  alt="Abdulazeem Salau"
  className="mb-3 rounded shadow"
  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
/>



      <h1 className="fw-bold">Abdulazeem Salau</h1>
      <p className="text-muted fs-5">Full-Stack Developer</p>
      
      <p className="text-center mb-4 px-3">
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

      <div className="mt-3">
        <a href="#skills" className="btn btn-primary me-2">
          View My Work
        </a>
        <a href="#contact" className="btn btn-outline-primary">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
