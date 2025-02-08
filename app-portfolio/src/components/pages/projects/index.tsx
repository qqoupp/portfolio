import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";

const Projects = forwardRef<HTMLButtonElement>((props, ref) => {

    const myRef = React.useRef<HTMLDivElement>(null);
    const executeScroll = () => myRef.current?.scrollIntoView({ behavior: "smooth" });

    return (
        <Box className="container mx-auto pt-10 ">
            <Typography variant="h1" paddingBottom={4}>
                                <button ref={ref} className="text-orange-400"  onClick={executeScroll}>My projects</button>
            </Typography>
            <Typography ref={myRef} className = "text-white" variant="h1">To be added</Typography>
        </Box>
    );
    });
    export default Projects;