import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = ({
  scrollToSection,
  aboutRef,
  projectsRef,
  skillsRef,
  contactRef,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About Me", ref: aboutRef },
    { label: "Projects", ref: projectsRef },
    { label: "Skills", ref: skillsRef },
    { label: "Contact", ref: contactRef },
  ];

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setExpanded(false);
  };

  return (
    <Navbar
      expanded={expanded}
      bg="light"
      expand="lg"
      fixed="top"
      className={`shadow-sm ${scrolled ? "navbar-scrolled" : ""}`}
      style={{ minHeight: "var(--navbar-height)" }}
    >
      <Container>
        <Navbar.Brand
          role="button"
          onClick={() => handleNavClick(aboutRef)}
          className="fw-bold"
          style={{ color: "var(--brand-primary)" }}
        >
          Shabbaz
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded((prev) => !prev)}
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navItems.map(({ label, ref }) => (
              <Nav.Link
                key={label}
                as="button"
                className="nav-link border-0 bg-transparent"
                onClick={() => handleNavClick(ref)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
