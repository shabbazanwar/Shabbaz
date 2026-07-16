import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer bg-dark text-light">
      <Container>
        <Row className="justify-content-between align-items-center py-4">
          {/* Social Media Links */}
          <Col xs={12} md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5>Connect with Me</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a
                href="https://github.com/shabbazanwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light footer-icon"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/abdulazeem-salau-47b86a341"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light footer-icon"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light footer-icon"
                aria-label="Twitter Profile"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="mailto:abdulazeemsalau@gmail.com"
                className="text-light footer-icon"
                aria-label="Send Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </Col>

          {/* Copyright */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <h5>Abdulazeem Salau</h5>
            <p className="mb-0 text-secondary">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
