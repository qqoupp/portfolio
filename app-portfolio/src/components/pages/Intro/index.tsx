import { Box, Grid, Typography } from "@mui/material";
import { profile } from "console";
import React from "react";
import Profile2 from "../../images/profile/profile2.JPG";
import profileImage from "../../images/profile/profile.jpeg"


const Intro = () => {
      const [profile, setProfile] = React.useState(true);
    
    return (
        <Box className="container mx-auto">
            
        <Grid container spacing={2}>
        <Grid item xs={8}>
          <div >
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
        </Box>
    );
    };
export default Intro;