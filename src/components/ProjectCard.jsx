import React from "react";
import { Card } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, image, link }) {
  const styles = {
    img: {
      objectFit: "cover",
      height: "260px",
      width: "100%",
      borderRadius: "10px",
      cursor: "pointer"
    }
  }
  return (
    <Card className="shadow-lg border-0 rounded-4 p-3" style={{ height: "450px" }} onClick={link}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <Card.Title className="fw-bold">{title}</Card.Title>
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="text-secondary" />
          </a>
        </div>
        <Card.Text className="text-muted">{description}</Card.Text>
        <div className="rounded-3 overflow-hidden border mt-2">
          <Card.Img variant="top" src={image} style={styles.img} />
        </div>
      </Card.Body>
    </ Card>
  );
}

export default ProjectCard;
