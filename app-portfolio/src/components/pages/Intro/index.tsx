import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FlipCard from "../../animations/cardFlip";

const Intro = () => {
  return (
    <Box className="container mx-auto">
      <Grid container direction="column" spacing={2} alignItems="center">
        <Grid item xs={12} className="text-center">
          <Typography
            variant="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Hi, I'm <span className="text-lime-900">Radu</span>, and this is
            where you can explore my projects.
          </Typography>
        </Grid>
        <Grid item xs={12} className="flex justify-center items-center mt-6">
          <FlipCard
            className="
    w-40 h-40          
    sm:w-48 sm:h-48   
    md:w-56 md:h-56    
    lg:w-64 lg:h-64     
    xl:w-72 xl:h-72     
    mx-auto
  "
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
