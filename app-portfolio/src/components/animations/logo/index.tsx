import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import styled from "styled-components";

// Styled Container
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  cursor: pointer;
  overflow: hidden; 
  padding: 0 20px;
`;

// Styled Animated SVG
const AnimatedSVG = styled(animated.svg)`
  width: 200px;
  height: auto;
`;

const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

const LogoAnimation: React.FC = () => {
  const [open, toggle] = useState(false);

  const { freq, factor, scale, opacity } = useSpring({
    reverse: open,
    from: { factor: 10, opacity: 0, scale: 0.9, freq: "0.0175, 0.0" },
    to: { factor: 150, opacity: 1, scale: 1, freq: "0.0, 0.0" },
    config: { duration: 3000 },
  });

  return (
    <LogoContainer onClick={() => toggle(!open)}>
      <AnimatedSVG viewBox="95 0 900 446" style={{ scale, opacity }}>
        <defs>
          <filter id="water">
            <AnimFeTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves="2"
              result="TURB"
              seed="8"
            />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
          <text x="50%" y="30%" textAnchor="middle" fontSize="120" fill="#ff6600" fontWeight="bold">
            Radu
          </text>
          <text x="50%" y="55%" textAnchor="middle" fontSize="120" fill="#ff6600" fontWeight="bold">
            Constantin
          </text>
          <text x="50%" y="85%" textAnchor="middle" fontSize="120" fill="#ff6600" fontWeight="bold">
            Simuleac
          </text>
        </g>
      </AnimatedSVG>
    </LogoContainer>
  );
};

export default LogoAnimation;
