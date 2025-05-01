import React from "react";
import FancyButton from "../buttons/headerButton";
import Logo from "../animations/logo";
import Container from "../Container";

type SectionName = "about" | "skills" | "projects" | "contact" | "home";

interface HeaderProps {
  activeSection: SectionName;
  onScroll: (section: SectionName) => void;
}

const sections: SectionName[] = ["about", "skills", "projects", "contact"];

const Header: React.FC<HeaderProps> = ({ activeSection, onScroll }) => {
  return (
    <Container>
      <div className="flex justify-between items-center pt-4">
        <Logo />

        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <FancyButton
              key={section}
              title={section.charAt(0).toUpperCase() + section.slice(1)}
              onClick={() => onScroll(section)}
              isActive={activeSection === section}
            />
          ))}
          <FancyButton
            title="Resume"
            onClick={() =>
              window.open(process.env.PUBLIC_URL + "/resume.pdf", "_blank")
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Header;
