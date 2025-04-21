import React, { useRef } from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Project from "../components/Projects";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar"; // Import NavBar here

const Portfolio = () => {
  // Create refs for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Pass refs and scroll function to NavBar */}
      <NavBar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      <div ref={aboutRef}>
        <AboutMe 
        scrollToSection={scrollToSection} // Pass scroll function
        projectsRef={projectsRef} // Pass projectsRef
        contactRef={contactRef} // Pass contactRef
        />
      </div>
      <div ref={projectsRef}>
        <Project />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;
