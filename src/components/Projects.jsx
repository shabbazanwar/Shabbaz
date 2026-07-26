
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
              title="Yew! Couture"
              description="A Nigerian fashion brand e-commerce site showcasing and selling ready-to-wear apparel."
              image="/projects/yew-couture.png"
              link="https://yewcouture.org"
            />
          </Col>

          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="School Management System"
              description="A school management system for handling student records, classes, and administration."
              image="https://res.cloudinary.com/djbtdlzrj/image/upload/v1738102417/Screenshot_2025-01-28_231209_wmkvwt.png" // Replace with actual image URL
              link="https://chizzy-kids-school.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="ShopSpire"
              description="A multi-vendor e-commerce platform where vendors manage their own stores and customers shop across all of them in one place."
              image="https://res.cloudinary.com/duw8lbca7/image/upload/v1745235132/Screenshot_2025-04-21_052910_jbnkf8.png"
              link="https://shopspire.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="FinSync"
              description="A personal finance tracker for logging income and expenses and keeping an eye on your budget."
              image="https://res.cloudinary.com/duw8lbca7/image/upload/v1745235603/Screenshot_2025-04-21_053642_rdtqxb.png"
              link="https://finsync-p5sr.onrender.com"
            />
          </Col>

          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="Jadoo | Travel & Tourism"
              description="A travel and tourism platform for discovering destinations and planning trips."
              image="/projects/jadoo.png"
              link="https://jadoo-yfr7.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;