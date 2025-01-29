import React from "react";
import { Typography } from "@mui/material";

const Skills = () => {
    return (
        <div className="flex flex-col">
            <Typography variant="h1">Skills</Typography>
            <Typography variant="h2">Frontend</Typography>
            <Typography variant="h3">React</Typography>
            <Typography variant="h3">HTML</Typography>
            <Typography variant="h3">CSS</Typography>
            <Typography variant="h3">JavaScript</Typography>
            <Typography variant="h2">Backend</Typography>
            <Typography variant="h3">Node.js</Typography>
            <Typography variant="h3">Express</Typography>
            <Typography variant="h3">MongoDB</Typography>
            <Typography variant="h3">PostgreSQL</Typography>
            <Typography variant="h2">Other</Typography>
            <Typography variant="h3">Git</Typography>
            <Typography variant="h3">GitHub</Typography>
            <Typography variant="h3">Heroku</Typography>
            <Typography variant="h3">Netlify</Typography>
        </div>
    );
}
export default Skills;