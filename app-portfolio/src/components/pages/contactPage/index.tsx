import React, { forwardRef } from "react";
import { Box, Typography } from "@mui/material";

const Contact = forwardRef<HTMLButtonElement>((props, ref) => {

    const myRef = React.useRef<HTMLDivElement>(null);
    const executeScroll = () => myRef.current?.scrollIntoView({ behavior: "smooth" });

    return (
        <Box className="container mx-auto pt-10 ">
            <Typography variant="h1" paddingBottom={4}>
                                <button ref={ref} className="text-orange-400"  onClick={executeScroll}>Here is how you can get in contact with me</button>
            </Typography>
            <div ref={myRef} className="flex flex-row justify-between">
                <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h2">Email:</Typography>
                <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h2">LinkedIn:</Typography>
                <Typography className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer" variant="h2">GitHub::</Typography>

            </div>
        </Box>
    );
    });
export default Contact;