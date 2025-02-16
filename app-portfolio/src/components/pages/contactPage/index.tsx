import React, { forwardRef } from "react";
import { Box, Typography } from "@mui/material";

const Contact = forwardRef<HTMLButtonElement>((props, ref) => {

    const myRef = React.useRef<HTMLDivElement>(null);
    const executeScroll = () => myRef.current?.scrollIntoView({ behavior: "smooth" });

    return (
        <Box className="container mx-auto pt-10 ">
            <Typography variant="h1" paddingBottom={4}>
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-orange-400 hover:before:bg-orange-500 hover:before:skew-y-3 before:transition-all before:duration-300">
            <span className="relative text-white dark:text-gray-950"ref={ref} onClick={executeScroll}>Contact</span>
  </span>
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