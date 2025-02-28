import { Box, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import AboutPage from "../aboutPage";
import Header from "../../Header";
import Skills from "../skills";
import Projects from "../projects";
import Contact from "../contactPage";
import Resume from "../resume";
import Intro from "../Intro";
import p1 from "../../images/background/p1.svg";
import p2 from "../../images/background/p2.svg";
import p3 from "../../images/background/p3.svg";




import { Parallax, ParallaxLayer,IParallax  } from "@react-spring/parallax";

const LandingPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const parallaxRef = useRef<IParallax>(null);


  const scrollToAbout = () => parallaxRef.current?.scrollTo(0.7);
  const scrollToSkills = () => parallaxRef.current?.scrollTo(1.3);
  const scrollToProjects = () => parallaxRef.current?.scrollTo(1.9);
  const scrollToContact = () => parallaxRef.current?.scrollTo(3.3);


  return (
    <>
      

      <Parallax ref={parallaxRef} pages={4}>
      <ParallaxLayer offset={0} speed={1} factor={2.5} style={{ backgroundImage : `url(${p1})`, backgroundSize: "cover"}}>
      </ParallaxLayer>
      <ParallaxLayer offset={1.4} speed={1} factor={3} style={{ backgroundImage: `url(${p2})`, backgroundSize: "cover" }}>
      </ParallaxLayer>
      <ParallaxLayer offset={2.85} speed={1} factor={3} style={{ backgroundImage: `url(${p3})`, backgroundSize: "cover" }}>
      </ParallaxLayer>
      
        <ParallaxLayer offset={0} speed={0.5} factor={1}>
        <Header 
          onScrollAbout={scrollToAbout} 
          onScrollSkills={scrollToSkills} 
          onScrollProjects={scrollToProjects} 
          onScrollContact={scrollToContact}
        />
          <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Intro />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={0.5} factor={1}>
          <div ref={aboutRef} style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AboutPage />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.4} speed={0.5} factor={1}>
          <div ref={skillsRef} style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Skills />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={0.5} factor={1}>
          <div ref={projectsRef} style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Projects />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.3} speed={0.5} factor={1}>
          <div ref={contactRef} style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default LandingPage;
