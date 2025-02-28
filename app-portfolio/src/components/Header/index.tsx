import { Typography } from "@mui/material";
import React from "react";
import HeaderButton from "../buttons/headerButton";
import AnimatedList from "../animations/logo";
import Container from "../Container";

interface HeaderProps {
    onScrollAbout: () => void;
    onScrollSkills: () => void;
    onScrollProjects: () => void;
    onScrollContact: () => void;
}

const Header: React.FC<HeaderProps> = ({
    onScrollAbout,
    onScrollSkills,
    onScrollProjects,
    onScrollContact,
}) => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    const handleResumeClick = () => {
        window.open(process.env.PUBLIC_URL + '/resume.pdf', '_blank');
    };

    return (
        <Container>
            <div className="pb-5 pt-5 flex flex-row justify-between items-center">
                <div className="pt-4 relative">
                    <AnimatedList />
                </div>
                
                <div className="flex space-x-2">
                    <HeaderButton title="About" onClick={onScrollAbout} />
                    <HeaderButton title="Skills" onClick={onScrollSkills} />
                    <HeaderButton title="Projects" onClick={onScrollProjects} />
                    <HeaderButton title="Contact" onClick={onScrollContact} />
                    <HeaderButton title="Resume" onClick={handleResumeClick} />
                </div>
            </div>
        </Container>
    );
};

export default Header;
