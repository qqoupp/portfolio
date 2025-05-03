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

  const sectionOffsets: Record<SectionName, number> = {
    home: 0,
    about: 0.3,
    skills: 0.9,
    projects: 1.5,
    contact: 2.5,
  };

  const scrollToSection = (section: SectionName) => {
    const offset = sectionOffsets[section];
    parallaxRef.current?.scrollTo(offset);
  };

  const handleScroll = () => {
    if (!parallaxRef.current) return;

    const scrollPosition =
      parallaxRef.current.container.current?.scrollTop ?? 0;

    let active: SectionName = "home";
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
    const interval = setInterval(handleScroll, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const headerStyle = {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
    backgroundColor: "transparent",
    backdropFilter: "blur(20px)",
  };

  return (
    <>
      <div style={headerStyle}>
        <Header activeSection={activeSection} onScroll={scrollToSection} />
      </div>

      <Parallax
        ref={parallaxRef}
        pages={window.innerWidth < 768 ? 5.5 : 3}
        onScroll={handleScroll}
      >
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={7}
          style={{
            backgroundImage: `url(${p1})`,
            backgroundSize: "cover",
            opacity: "0.2",
          }}
        />

        <ParallaxLayer
          offset={window.innerWidth < 768 ? 0.1 : 0}
          speed={0.5}
          factor={1}
        >
          <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen pt-20">
            <Intro />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={window.innerWidth < 768 ? 0.9 : 0.8}
          speed={0.5}
          factor={1}
        >
          <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen ">
            <AboutPage />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={window.innerWidth < 768 ? 1.6 : 1.1}
          speed={0.5}
          factor={1}
        >
          <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen ">
            <Skills />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.95} speed={0.5} factor={1}>
          <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen ">
            <Projects />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={window.innerWidth < 768 ? 4.5 : 2.25}
          speed={0.5}
          factor={1}
        >
          <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen ">
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default LandingPage;
