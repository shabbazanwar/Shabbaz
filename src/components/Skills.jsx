import React from "react";
import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaCode,
  FaNode, FaDatabase, FaGitAlt, FaEdge, FaTerminal
} from "react-icons/fa";
import {
    SiTailwindcss,        
    SiRender,
    SiOpenai
  } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
        { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
        { name: "React", icon: <FaReact color="#61dafb" /> },
        { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: <FaNode color="#3c873a" /> },
        { name: "MongoDB", icon: <FaDatabase color="#4db33d" /> },
        { name: "HTTPie", icon: <FaTerminal color="#6c757d" /> },
      ],
    },
    {
      category: "Tools & Version Control",
      items: [
        { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
        { name: "ChatGPT", icon: <SiOpenai color="#10a37f" /> },
        { name: "VS Code", icon: <FaCode color="#007acc" /> },
        { name: "Microsoft Edge", icon: <FaEdge color="#0078d7" /> },
        { name: "Render", icon: <SiRender color="#46e3b7" /> },
      ],
    },
  ];

  return (
    <section style={{ background: "#f8f9fa", padding: "4rem 0" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">Tech Stack</h2>
        {skills.map((skillCategory, index) => (
          <div key={index} className="mb-4">
            <h4 className="fw-bold text-secondary mb-3">{skillCategory.category}</h4>
            <Row>
              {skillCategory.items.map((skill, idx) => (
                <Col xs={6} md={3} className="mb-3" key={idx}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{skill.name}</Tooltip>}
                  >
                    <Card
                      className="text-center"
                      style={{
                        padding: "2rem 1rem",
                        borderRadius: "15px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{skill.icon}</div>
                      <h6 className="fw-bold text-dark">{skill.name}</h6>
                    </Card>
                  </OverlayTrigger>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
