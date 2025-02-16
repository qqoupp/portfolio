import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";

const AboutPage = forwardRef<HTMLButtonElement>((props, ref) => {
    const myRef = React.useRef<HTMLDivElement>(null);
    const executeScroll = () => myRef.current?.scrollIntoView({ behavior: "smooth" });
  return (
    <Box className="container mx-auto pt-10 ">
        <Typography variant="h1" paddingBottom={4}>
        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-orange-400 hover:before:bg-orange-500 hover:before:skew-y-3 before:transition-all before:duration-300">
    <span className="relative text-white dark:text-gray-950"ref={ref} onClick={executeScroll}>About</span>
  </span>
        </Typography>
        <Typography variant="h3" color={"white"} ref={myRef}>
        I am a recent graduate from <a href="https://www.bolton.ac.uk/" target="_blank" rel="noopener noreferrer"><span className="text-orange-400"> Bolton University</span>  </a>, earning a first-class degree in Software Engineering. I enjoy exploring new experiences and continuously learning—whether it s trying new foods, picking up new hobbies, or diving into exciting challenges.

I have a passion for building things and finding creative solutions to everyday problems. I am open to work opportunities and collaborations on exciting projects where I can learn, contribute, and grow.
        </Typography>
    </Box>
  );
});

export default AboutPage;