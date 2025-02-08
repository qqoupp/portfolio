import React, { forwardRef } from "react";
import { Box, Typography } from "@mui/material";

const Skills = forwardRef<HTMLButtonElement>((props, ref) => {
    const myRef = React.useRef<HTMLDivElement>(null);
    const executeScroll = () => myRef.current?.scrollIntoView({ behavior: "smooth" });
    return (

        <Box className="container mx-auto pt-10 ">
        <Typography variant="h1" paddingBottom={4}>
                    <button ref={ref} className="text-orange-400"  onClick={executeScroll}>My skills </button>
                </Typography>
        <div ref={myRef} className="flex flex-row justify-between">
            <div className="flex flex-col">

            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer"variant="h2">Frontend</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">React</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">HTML</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">CSS</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">JavaScript</Typography>
            </div>
            <div className="flex flex-col">

            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h2">Backend</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">Node.js</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">Express</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">MongoDB</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">MySQL</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">Java</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">SpringBoot</Typography>
            </div>
            <div className="flex flex-col">
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h2">Other</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">Git</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">GitHub</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">Doker</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">AWS</Typography>
            <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h3">Heroku</Typography>
            </div>
        </div>
        </Box>

    );
});
export default Skills;