import { Box, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import AboutPage from "../aboutPage";
import Header from "../../Header";
import Skills from "../skills";
import Projects from "../projects";
import Contact from "../contactPage";
import Resume from "../resume";
import profileImage from "../../images/profile/profile.jpeg"
import Profile2 from "../../images/profile/profile2.JPG"

const LandingPage = () => {

  const [profile, setProfile] = React.useState(true);

  const aboutRef = useRef<HTMLButtonElement>(null);
  const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const skillsRef = useRef<HTMLButtonElement>(null);
  const scrollToSkills = () => skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  const projectsRef = useRef<HTMLButtonElement>(null);
  const scrollToProjects = () => projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  const contactRef = useRef<HTMLButtonElement>(null);
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth" });
    return (
        <>
        <Header 
        onScrollAbout={scrollToAbout} 
        onScrollSkills={scrollToSkills} 
        onScrollProjects={scrollToProjects} 
        onScrollContact={scrollToContact}
        />
        <Box className="container mx-auto p-4 ">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div className="pt-12">
            <Typography variant="h2" color={"white"} >
            Hi, my name is <span className="text-orange-400 " > Radu Constantin Simuleac</span>, and here you can check out what I have been working on.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4} className="flex justify-center items-center">
        <img
        
         onClick={() => setProfile(prevMode => !prevMode)}
         className="h-86 w-86 object-scale-down rounded-full border-8 border-orange-400 borde hover:rotate-2 , hover:scale-95 transition-all duration-300 ease-in-out hover:border-orange-500" 
         src={profile ? profileImage : Profile2}
         />
        </Grid>
      </Grid>
        <AboutPage ref={aboutRef}/>
        <Skills ref={skillsRef}/>
        <Projects ref={projectsRef}/>
        <Contact ref={contactRef}/>
        <Resume />
    </Box>
        
        </>
    );
    };
export default LandingPage;