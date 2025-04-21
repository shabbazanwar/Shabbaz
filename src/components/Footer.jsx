import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light"
      style={{
        position: "relative",
        width: "100%",
        padding: "1rem 0",
      }}
    >
      <Container>
        <Row className="justify-content-between align-items-center">
          {/* Social Media Links */}
          <Col xs={12} md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5>Connect with Me</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://github.com/Rockhillz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/izuchukwu-alaneme-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/izzy_dev_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                aria-label="Twitter Profile"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="mailto:izuchukwualaneme@gmail.com"
                className="text-light"
                aria-label="Send Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </Col>

          {/* Copyright */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <h5>Shabbaz</h5>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Shabbaz. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
