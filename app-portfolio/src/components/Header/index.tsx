import React from "react";
import FancyButton from "../buttons/headerButton";
import AnimatedList from "../animations/logo";
import Container from "../Container";

type SectionName = "about" | "skills" | "projects" | "contact"| "home";

interface HeaderProps {
  activeSection: SectionName;
  onScroll: (section: SectionName) => void;
}

const sections: SectionName[] = ["about", "skills", "projects", "contact"];

const Header: React.FC<HeaderProps> = ({ activeSection, onScroll }) => {
  const sections: SectionName[] = ["about", "skills", "projects", "contact",];

  return (
    <Container>
      <div className="flex justify-between items-center pt-4">
        <AnimatedList />
        {sections.map((section) => (
          <FancyButton
            key={section}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
            onClick={() => onScroll(section)}
            isActive={activeSection === section}
          />
        ))}
        <FancyButton title="Resume" onClick={() => window.open(process.env.PUBLIC_URL + '/resume.pdf', '_blank')} />
      </div>
    </Container>
  );
};

export default Header;
