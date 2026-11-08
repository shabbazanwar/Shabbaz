import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(null);

    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    fetch(`${apiUrl}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setSuccess("Failed to send message. Try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setSuccess("Failed to send message. Try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container className="py-5 contact-form-shell" id="contact" role="region" aria-label="Get in touch">
      <Row className="justify-content-center align-items-stretch g-4">
        <Col md={5} className="mb-4">
          <div className="contact-intro-panel">
            <p className="elyebrow">Let’s talk</p>
            <h4>Get in Touch</h4>
            <div className="mt-3 contact-meta-list">
              <p>
                <FaEnvelope className="me-2 contact-icon" /> <a href="mailto:abdulazeemsalau@gmail.com">abdulazeemsalau@gmail.com</a>
              </p>
              <p>
                <FaPhone className="me-2 contact-icon" /> <a href="tel:+2349044060010">+234 904 406 0010</a>
              </p>
              <p>
                <FaMapMarkerAlt className="me-2 contact-icon" /> Lagos, Nigeria
              </p>
            </div>

            <div className="mt-4 d-flex gap-3">
              <a
                href="https://linkedin.com/in/abdulazeem-salau-47b86a341"
                aria-label="LinkedIn (opens in new tab)"
                className="contact-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/shabbazanwar"
                aria-label="GitHub (opens in new tab)"
                className="contact-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={28} />
              </a>
            </div>
          </div>
        </Col>

        <Col md={7}>
          <Form onSubmit={handleSubmit} className="contact-form-card">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="contact-name">Your name</Form.Label>
              <Form.Control
                id="contact-name"
                autoComplete="name"
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="contact-email">Email address</Form.Label>
              <Form.Control
                id="contact-email"
                autoComplete="email"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="contact-subject">Subject</Form.Label>
              <Form.Control
                id="contact-subject"
                type="text"
                placeholder="Enter subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="contact-message">Your message</Form.Label>
              <Form.Control
                id="contact-message"
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" disabled={loading}>
              {loading ? (
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              ) : (
                'Send Message'
              )}
              {loading && ' Sending...'}
            </Button>

            {success && (
              <p role="status" className={`mt-3 text-center ${success.includes('successfully') ? 'text-success' : 'text-danger'}`}>
                {success}
              </p>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
