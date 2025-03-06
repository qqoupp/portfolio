import { Box, Grid, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import AuthenticationCard from "../../cards/index"; 

const Projects = forwardRef<HTMLButtonElement>((props, ref) => {
  const myRef = React.useRef<HTMLDivElement>(null);
  const executeScroll = () =>
    myRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box className="container mx-auto pt-10 ">
      
      <Box className="p-4">
        <div className="flex flex-row justify-between">
          <Typography className="text-white " variant="h3">
            ElevateStakLearning
          </Typography>
          <Typography className="text-white" variant="h4">
            Web application
          </Typography>
        </div>
        <br />
        <div className="flex flex-row justify-between">
          <Typography className="text-white" variant="h4">
            Designed using:
          </Typography>
          <Typography className="text-white" variant="h4">
            TypeScript
          </Typography>
          <Typography className="text-white" variant="h4">
            React
          </Typography>
          <Typography className="text-white" variant="h4">
            Node.Js
          </Typography>
          <Typography className="text-white" variant="h4">
            Express
          </Typography>
          <Typography className="text-white" variant="h4">
            MySQL
          </Typography>
          <Typography className="text-white " variant="h4">
            Doker
          </Typography>
        </div>
        <br/>
        <div >
          <Typography className="text-white" variant="h4">
            Description:
          </Typography>
          <br />
          <Typography className="text-white" variant="h4">
            ElevateStakLearning is a web application that allows users to create
            an account, log in, and start learning. The application is designed
            to help users learn new skills and improve their knowledge. Users
            can access a wide range of courses, quizzes, and other learning
            materials. The application also allows users to track their progress
            and see how they are improving over time.
          </Typography>
        </div>
        <br />
        <Typography className="text-white" variant="h4">
            Features:
          </Typography>
        <div className=" container mx-auto p-5 ">
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
                <AuthenticationCard title={"Authentication and authorization"} content={"Expend for more info and video example"} extraContent={"To be added"}/>
            </Grid>
            <Grid item xs={6}>
                <AuthenticationCard title={"Generating a learning path "} content={"Expend for more info and video example"} extraContent={"To be added"}/>
            </Grid>
            <Grid item xs={6}>
                <AuthenticationCard title={"Learning path visualization"} content={"Expend for more info and video example"} extraContent={"To be added"}/>
            </Grid>
            <Grid item xs={6}>
                <AuthenticationCard title={"Aditional querry for the learning path instructions"} content={"Expend for more info and video example"} extraContent={"To be added"}/>
            </Grid>
            <Grid item xs={6}>
                <AuthenticationCard title={"History of learning paths"} content={"Expend for more info and video example"} extraContent={"To be added"}/>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
});
export default Projects;
