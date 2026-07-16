import React from "react";
import { Card } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

const styles = {
  img: {
    objectFit: "cover",
    aspectRatio: "16 / 9",
    width: "100%",
    borderRadius: "10px",
  },
};

function ProjectCard({ title, description, image, link }) {
  return (
    <Card
      className="shadow-lg border-0 rounded-4 p-3 h-100 project-card"
      role="link"
      tabIndex={0}
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      onKeyDown={(e) => {
        if (e.key === "Enter") window.open(link, "_blank", "noopener,noreferrer");
      }}
    >
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start">
          <Card.Title className="fw-bold">{title}</Card.Title>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Open ${title} in a new tab`}
          >
            <FaExternalLinkAlt className="text-secondary" />
          </a>
        </div>
        <Card.Text className="text-muted flex-grow-1">{description}</Card.Text>
        <div className="rounded-3 overflow-hidden border mt-2">
          <Card.Img variant="top" src={image} style={styles.img} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
