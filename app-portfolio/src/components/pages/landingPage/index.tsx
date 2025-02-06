import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AboutPage from "../aboutPage";
import Header from "../../Header";
import Skills from "../skills";
import Projects from "../projects";
import Contact from "../contactPage";
import Resume from "../resume";
import profileImage from "../../images/profile/profile.jpeg"

const LandingPage = () => {
    return (
        <>
        <Header />
        <Box className="container mx-auto p-4 ">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div className="pt-12">
            <Typography variant="h2" >
            Hi, my name is <span className="text-orange-400"> Radu Constantin Simuleac</span>, and here you can check out what I have been working on. I try my best to create things with ❤️
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4} className="flex justify-center items-center">
        <img className="h-96 w-96 object-scale-down rounded-full border-8 border-orange-400 borde" src={profileImage} />
        </Grid>
      </Grid>
        <AboutPage />
        <Skills />
        <Projects />
        <Contact />
        <Resume />
    </Box>
        
        </>
    );
    };
export default LandingPage;