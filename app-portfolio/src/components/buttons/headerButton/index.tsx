import React from "react";
import styled from "styled-components";

// Styled Components for Fancy Button
const ButtonWrapper = styled.div<{ isActive: boolean }>`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  perspective: 600px;
  width: 100px;  /* Reduced width */
  height: 50px;  /* Reduced height */

  ${({ isActive }): string => isActive ? `
    ${Flipper} {
      transform: rotateX(0deg);
    }
  ` : ''}
`;

const Flipper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateX(-90deg);
  transition: transform 0.3s ease;

  ${ButtonWrapper}:hover & {
    transform: rotateX(0deg);
  }

  ${ButtonWrapper}:active & {
    transform: rotateX(0deg) scale(0.95);
    transition: transform 0.05s ease;
  }
`;

const ButtonFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const FrontFace = styled(ButtonFace)`
  background-color: #ff6600;
  color: white;
  transform: rotateX(0deg) translateZ(25px); 
`;

const BackFace = styled(ButtonFace)`
  background-color: transparent;
  color: #ff6600;
  border: 3px solid #ff6600;
  transform: rotateX(90deg) translateZ(25px); 

  ${ButtonWrapper}:hover & {
    mix-blend-mode: difference;
  }
`;

interface FancyButtonProps {
  title: string;
  onClick: () => void;
  isActive?: boolean;
}

const FancyButton: React.FC<FancyButtonProps> = ({ title, onClick, isActive = false }) => {
  return (
    <ButtonWrapper onClick={onClick} isActive={isActive}>
      <Flipper>
        <FrontFace>{title}</FrontFace>
        <BackFace>{title}</BackFace>
      </Flipper>
    </ButtonWrapper>
  );
};

export default FancyButton;
