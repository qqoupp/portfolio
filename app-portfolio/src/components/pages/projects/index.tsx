import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";

const Projects = forwardRef<HTMLButtonElement>((props, ref) => {

    const myRef = React.useRef<HTMLDivElement>(null);
    const executeScroll = () => myRef.current?.scrollIntoView({ behavior: "smooth" });

    return (
        <Box className="container mx-auto pt-10 ">
            <Typography variant="h1" paddingBottom={4}>
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-orange-400 hover:before:bg-orange-500 hover:before:skew-y-3 before:transition-all before:duration-300">
            <span className="relative text-white dark:text-gray-950"ref={ref} onClick={executeScroll}>Projects</span>
  </span>
            </Typography>
            <Typography ref={myRef} className = "text-white" variant="h1">To be added</Typography>
        </Box>
    );
    });
    export default Projects;