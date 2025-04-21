
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    // Full-width background
    <div
      style={{
        backgroundColor: "#f5f5f5", // Background color for the full width
        width: "100%", // Ensure it spans the full width
      }}
    >
      {/* Constrained content */}
      <Container className="py-5">
        {/* Section Title */}
        <h2 className="text-center mb-4 fw-bold">Projects</h2>

        <Row className="justify-content-center">
          {/* Each project takes 4 columns on large screens, 6 on medium, 12 on small */}
          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="School Management System"
              description="A modern School Management System built using React, Node.js, and MongoDB."
              image="https://res.cloudinary.com/djbtdlzrj/image/upload/v1738102417/Screenshot_2025-01-28_231209_wmkvwt.png" // Replace with actual image URL
              link="https://chizzy-kids-school.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="Multi-Vendor E-commerce Platform"
              description="A multi-vendor e-commerce platform built using React, Node.js, and MongoDB."
              image="https://res.cloudinary.com/djbtdlzrj/image/upload/v1738102888/Screenshot_2025-01-28_232113_o3john.png" // Replace with actual image URL
              link="https://essence-of-style.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;