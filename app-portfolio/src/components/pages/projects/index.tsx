import { Box, Grid, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import Slider from "../../slider/index";
const Projects = forwardRef<HTMLButtonElement>((props, ref) => {
  const myRef = React.useRef<HTMLDivElement>(null);
  const executeScroll = () =>
    myRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="w-full bg-blue-950 bg-opacity-70 text-white py-16">
      <Box className="max-w-4xl mx-auto px-6 ">
        <div className="flex justify-between">
          <div></div>
          <Slider />
          <div></div>
        </div>
        {/* <div className="flex flex-row justify-between">
          <a href="https://eslearning.co.uk/" target="_blank">
            <Typography className=" !font-semibold underline" variant="h2">
              ElevateStakLearning
            </Typography>
          </a>
        </div>
        <br />
        <div className="flex flex-row justify-between">
          <Typography variant="h4">Designed using:</Typography>
          <Typography variant="h4">TypeScript</Typography>
          <Typography variant="h4">React</Typography>
          <Typography variant="h4">Node.Js</Typography>
          <Typography variant="h4">Express</Typography>
          <Typography variant="h4">MySQL</Typography>
          <Typography variant="h4">Doker</Typography>
        </div>
        <br />
        <div>
          <Typography variant="h3">Description:</Typography>
          <br />
          <Typography variant="h3">
            ElevateStakLearning is a web application that allows users to create
            an account, log in, and start learning. The application is designed
            to help users learn new skills and improve their knowledge. Users
            can access a wide range of courses, quizzes, and other learning
            materials. The application also allows users to track their progress
            and see how they are improving over time.
          </Typography>
        </div>
        <br />
        <div className="flex justify-between">
          <div>Previous</div>
          <Typography variant="h2" className="!font-semibold underline">
            Check it out!
          </Typography>
          <div>Next</div>
        </div> */}
      </Box>
    </section>
  );
});
export default Projects;
