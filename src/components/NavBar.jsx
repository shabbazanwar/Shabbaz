import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Navbar
      expanded={expanded}
      bg="light"
      expand="lg"
      className="mb-4 fixed-top shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          Shabbaz
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={handleToggle}
              >
                About Me
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={handleToggle}
              >
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={handleToggle}
              >
                Skills
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={handleToggle}
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
