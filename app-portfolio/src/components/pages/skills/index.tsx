import React, { forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import Popper from "../../popers";

const Skills = forwardRef<HTMLButtonElement>((props, ref) => {
    const myRef = React.useRef<HTMLDivElement>(null);
    const executeScroll = () => myRef.current?.scrollIntoView({ behavior: "smooth" });
    return (

        <Box className="container mx-auto pt-10 ">
        <Typography variant="h1" paddingBottom={4}>
        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-orange-400 hover:before:bg-orange-500 hover:before:skew-y-3 before:transition-all before:duration-300">
    <span className="relative text-white dark:text-gray-950"ref={ref} onClick={executeScroll}>Skills</span>
  </span>
                </Typography>
        <div ref={myRef} className="flex flex-row justify-between">
            <div className="flex flex-col">
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer"variant="h2">Frontend</Typography>
            <Popper title="HTML" content="I have been using HTML for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            <Popper title="CSS" content="I have been using CSS for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            <Popper title="JavaScript" content="I have been using JavaScript for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            <Popper title="React" content="I have been using React for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            <Popper title="Tailwind" content="I have been using Tailwind for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            </div>
            <div className="flex flex-col">

            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h2">Backend</Typography>
            <Popper title="Node.js" content="I have been using Node.js for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            <Popper title="Express" content="I have been using Express for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            <Popper title="MongoDB" content="I have been using MongoDB for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            <Popper title="MySQL" content="I have been using MySQL for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            <Popper title="Java" content="I have been using Java for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            <Popper title="SpringBoot" content="I have been using SpringBoot for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>

            </div>
            <div className="flex flex-col">
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h2">Other</Typography>
            <Popper title="Git" content="I have been using Git for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            <Popper title="Docker" content="I have been using Docker for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            <Popper title="GitHub" content="I have been using GitHub for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            <Popper title="AWS" content="I have been using AWS for 2 years now, and I am confident in my ability to create responsive and accessible websites."/>
            </div>
        </div>
        </Box>

    );
});
export default Skills;