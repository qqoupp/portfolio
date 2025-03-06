import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FlipCard from "../../animations/cardFlip";

const Intro = () => {
  return (
    <Box className="container mx-auto">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h2" color={"white"}>
            Hi, I'm <span className="text-orange-500">Radu</span>, and this is where you can explore the projects I've been working on.
          </Typography>
        </Grid>
        <Grid item xs={4} className="flex justify-center items-center">
          {/* <img
            onClick={() => setProfile(prevMode => !prevMode)}
            className="h-86 w-86 object-scale-down rounded-full border-8 border-orange-400 hover:rotate-2 hover:scale-95 transition-all duration-300 ease-in-out hover:border-orange-500"
            src={profile ? profileImage : Profile2}
          /> */}
          <FlipCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
