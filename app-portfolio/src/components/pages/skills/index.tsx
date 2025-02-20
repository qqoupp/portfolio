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
            <Typography className="text-orange-400"variant="h2">Frontend</Typography>
            <Popper title="HTML" content="I learned HTML through self-study and online courses, experimenting with building small projects and reading documentation. Websites like MDN Web Docs and W3Schools helped me understand HTML elements, semantic structure, and best practices."/>
            <Popper title="CSS" content="I learned CSS through self-study, experimenting with different styling techniques and layouts. Resources like MDN Web Docs, CSS Tricks, and interactive platforms like Flexbox Froggy helped me master layouts, animations, and responsive design."/>
            <Popper title="JavaScript" content="I strengthened my JavaScript skills by working on personal projects. I developed interactive websites, built API-driven applications, and improved performance using best practices like debouncing, lazy loading, and async/await."/>
            <Popper title="React" content="I learned React while working on my dissertation project at Bolton University, where I developed a full-stack website. Through this project, I gained hands-on experience with React components, state management, and handling API requests. I also implemented dynamic UI updates and optimized performance using React hooks and best practices."/>
            <Popper title="Tailwind" content="I used Tailwind CSS in my dissertation project at Bolton University to develop a modern, responsive website. Tailwind’s utility-first approach allowed me to efficiently style components, maintain consistency, and optimize performance. I leveraged Flexbox, Grid, and Tailwind’s built-in responsiveness to create a clean and scalable UI."/>
            </div>
            <div className="flex flex-col">

            <Typography className="text-orange-400 " variant="h2">Backend</Typography>
            <Popper title="TypeScript" content="I used TypeScript in my dissertation project at Bolton University to improve code maintainability and catch errors early. TypeScript’s static typing helped me write cleaner, more scalable React components and backend logic in Node.js."/>
            <Popper title="Node.js" content="For my dissertation project, I built the backend using Node.js to handle server-side logic and API requests. Node.js allowed me to create a fast and scalable application while managing real-time interactions and database queries efficiently."/>
            <Popper title="Express" content="I implemented Express.js as the backend framework in my dissertation project to create a RESTful API. I used middleware for authentication, handled routes efficiently, and connected with a MySQL database to manage dynamic data."/>
            <Popper title="MongoDB" content="I learned MongoDB while working on personal projects, mainly developing a website using the MERN stack. I used MongoDB as a NoSQL database to store and manage application data efficiently. I implemented CRUD operations, designed schemas with Mongoose, and optimized queries for performance in real-world applications."/>
            <Popper title="MySQL" content="I used MySQL as the database for my dissertation project, designing structured tables and optimizing queries for performance. I implemented CRUD operations, handled relationships between tables, and ensured data integrity through proper indexing and constraints."/>
            <Popper title="Java" content="I studied Java as part of my Software Engineering degree at Bolton University. Through coursework and practical assignments, I gained a strong understanding of object-oriented programming (OOP), data structures, and algorithms. I worked on projects involving multithreading, file handling, and database integration using JDBC and Spring Boot."/>
            <Popper title="SpringBoot" content="I explored Spring Boot while working on personal projects to build scalable backend services. I used it to develop RESTful APIs, handle database interactions, and manage authentication. Spring Boot's simplicity and integration with frameworks like Hibernate and Spring Security helped me build robust applications."/>

            </div>
            <div className="flex flex-col">
            <Typography className="text-orange-400 " variant="h2">Other</Typography>
            <Popper title="Git" content="I learned Git while working on university and personal projects to manage version control efficiently. I used Git to track changes, create branches for feature development, and resolve merge conflicts. Through hands-on experience, I became proficient in using commands like git commit, git merge, and git rebase to maintain a clean and structured codebase."/>
            <Popper title="Docker" content="I utilized Docker to store and manage my database for my university dissertation project. By containerizing my database, I was able to ensure a consistent, scalable, and isolated environment, making it easier to manage dependencies and deploy my application. This hands-on experience with Docker has strengthened my skills in containerization and application deployment."/>
            <Popper title="GitHub" content="I used GitHub to host and collaborate on projects, both individually and in teams. I have experience with creating repositories, managing pull requests, and reviewing code."/>
            <Popper title="AWS" content="I gained hands-on experience with AWS by using it to create an EC2 instance and host my university dissertation project. Through this process, I developed a deeper understanding of cloud infrastructure and how to manage scalable, reliable environments. This practical experience solidified my skills in AWS and cloud computing"/>
            </div>
        </div>
        </Box>

    );
});
export default Skills;