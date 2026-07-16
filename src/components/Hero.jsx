import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaCode, FaAward } from "react-icons/fa";

const stats = [
  {
    icon: <FaCode size={28} className="text-secondary" />,
    value: 4,
    title: "Total Projects",
    text: "Innovative web solutions crafted",
  },
  {
    icon: <FaAward size={28} className="text-secondary" />,
    value: 1,
    title: "Certificates",
    text: "Professional skills validated",
  },
];

function Hero() {
  return (
    <Row className="justify-content-center px-3 px-md-4 pb-4">
      {stats.map(({ icon, value, title, text }) => (
        <Col xs={12} sm={6} md={4} className="mb-3" key={title}>
          <Card className="text-white bg-dark shadow-lg border-0 h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                {icon}
                <h2 className="mb-0">{value}</h2>
              </div>
              <Card.Title className="mt-2">{title}</Card.Title>
              <Card.Text className="text-muted">{text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Hero;
