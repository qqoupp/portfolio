import React, { useRef, useState, useEffect } from "react";
import Header from "../../Header";
import AboutPage from "../aboutPage";
import Skills from "../skills";
import Projects from "../projects";
import Contact from "../contactPage";
import Intro from "../Intro";
import p1 from "../../images/background/p1.svg";
import p2 from "../../images/background/p2.svg";
import p3 from "../../images/background/p3.svg";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

type SectionName = "about" | "skills" | "projects" | "contact" | "home";

const LandingPage = () => {
  const parallaxRef = useRef<IParallax>(null);
  const [activeSection, setActiveSection] = useState<SectionName>("home");

  // Offset values for sections
  const sectionOffsets: Record<SectionName, number> = {
    home: 0,
    about: 0.3, // Adjust these as per your layout (as a ratio of total page height)
    skills: 0.9,
    projects: 1.5,
    contact: 2.5,
  };

  // Function to scroll to a specific section
  const scrollToSection = (section: SectionName) => {
    const offset = sectionOffsets[section];
    parallaxRef.current?.scrollTo(offset);
  };

  // Detect the active section as the user scrolls
  const handleScroll = () => {
    if (!parallaxRef.current) return;

    const scrollPosition = parallaxRef.current.container.current?.scrollTop ?? 0; // Get the current scroll position

    // Determine the active section based on the scroll position
    let active: SectionName = "home"; // Default to "home"
    if (scrollPosition >= sectionOffsets.contact * window.innerHeight) {
      active = "contact";
    } else if (scrollPosition >= sectionOffsets.projects * window.innerHeight) {
      active = "projects";
    } else if (scrollPosition >= sectionOffsets.skills * window.innerHeight) {
      active = "skills";
    } else if (scrollPosition >= sectionOffsets.about * window.innerHeight) {
      active = "about";
    }

    setActiveSection(active);
  };

  useEffect(() => {
    // Listen for scroll changes in a set interval
    const interval = setInterval(handleScroll, 100); // Check every 100ms for scroll position

    // Clean up when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Transparent header style
  const headerStyle = {
    position: "fixed" as "fixed", // Fixed header
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
    backgroundColor: "transparent", // Transparent background
    backdropFilter: "blur(20px)", // Transparent background blur
  };

  return (
    <>
      {/* Fixed Transparent Header */}
      <div style={headerStyle}>
        <Header activeSection={activeSection} onScroll={scrollToSection} />
      </div>

      <Parallax ref={parallaxRef} pages={4} onScroll={handleScroll}>
        {/* Background Layers */}
        <ParallaxLayer offset={0} speed={1} factor={2.5} style={{ backgroundImage: `url(${p1})`, backgroundSize: "cover" }} />
        <ParallaxLayer offset={1.4} speed={1} factor={3} style={{ backgroundImage: `url(${p2})`, backgroundSize: "cover" }} />
        <ParallaxLayer offset={2.85} speed={1} factor={3} style={{ backgroundImage: `url(${p3})`, backgroundSize: "cover" }} />

        {/* Intro Section */}
        <ParallaxLayer offset={0} speed={0.5} factor={1}>
          <div style={{ height: "75vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Intro />
          </div>
        </ParallaxLayer>

        {/* About Section */}
        <ParallaxLayer offset={0.6} speed={0.5} factor={1}>
          <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AboutPage />
          </div>
        </ParallaxLayer>

        {/* Skills Section */}
        <ParallaxLayer offset={1} speed={0.5} factor={1}>
          <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Skills />
          </div>
        </ParallaxLayer>

        {/* Projects Section */}
        <ParallaxLayer offset={2} speed={0.5} factor={1}>
          <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Projects />
          </div>
        </ParallaxLayer>

        {/* Contact Section */}
        <ParallaxLayer offset={3} speed={0.5} factor={1}>
          <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default LandingPage;
