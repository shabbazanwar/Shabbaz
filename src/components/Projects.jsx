
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
              title="Septagon Solicitors"
              description="A law firm website for showcasing practice areas, the legal team, and client insights."
              image="/projects/septagon-solicitors.png"
              link="https://septagonsolicitors.com"
            />
          </Col>

          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="STEEZYWURLD"
              description="A Lagos-based streetwear brand's online store, shipping apparel worldwide."
              image="/projects/steezywurld.png"
              link="https://www.steezywurld.xyz/"
            />
          </Col>

          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="Fabrication Legend"
              description="A website for a Kampala-based company offering aluminium and steel fabrication, ceilings, partitions, and interior fit-out across Uganda."
              image="/projects/fabrication-legend.png"
              link="https://fabricationlegend.com"
            />
          </Col>

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
              title="FinSync"
              description="A personal finance tracker for logging income and expenses and keeping an eye on your budget."
              image="/projects/finsync.png"
              link="https://finsync-few1.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="ShopSpire"
              description="A multi-vendor e-commerce platform where vendors manage their own stores and customers shop across all of them in one place."
              image="/projects/shopspire.png"
              link="https://shopspire.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="Bob Review Coach"
              description="An AI code-review tool that runs a git diff or GitHub pull request past security, correctness, and maintainability reviewers. Built for the IBM Bob 2.0 Hackathon."
              image="/projects/bob-review-coach.png"
              link="https://bobreviewcoach-nine.vercel.app/"
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