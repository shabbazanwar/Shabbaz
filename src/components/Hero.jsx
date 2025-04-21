import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaCode, FaAward } from "react-icons/fa";

function Hero() {
  return (
    <Row className="justify-content-center p-4">
      {/* Total Projects Card */}
      <Col xs={12} sm={6} md={4} className="mb-3">
        <Card className="text-white bg-dark shadow-lg border-0">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <FaCode size={28} className="text-secondary" />
              <h2 className="mb-0">2</h2>
            </div>
            <Card.Title className="mt-2">Total Projects</Card.Title>
            <Card.Text className="text-muted">
              Innovative web solutions crafted
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Certificates Card */}
      <Col xs={12} sm={6} md={4} className="mb-3">
        <Card className="text-white bg-dark shadow-lg border-0">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <FaAward size={28} className="text-secondary" />
              <h2 className="mb-0">1</h2>
            </div>
            <Card.Title className="mt-2">Certificates</Card.Title>
            <Card.Text className="text-muted">
              Professional skills validated
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Hero;
