import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import styles from "./styles.module.css";
import Profile2 from "../../images/profile/profile2.JPG";
import profileImage from "../../images/profile/profile.svg";

interface FlipCardProps {
  className?: string;
  onClick?: () => void;
}

const FlipCard: React.FC<FlipCardProps> = ({ className = "", onClick }) => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(300px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleClick = () => {
    setFlipped((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <div className={`relative ${className}`} onClick={handleClick}>
      {/* Back Side */}
      <a.div
        className={`${styles.c}`}
        style={{
          backgroundImage: `url(${Profile2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      />

      {/* Front Side */}
      <a.div
        className={`${styles.c}`}
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity,
          transform,
          rotateX: "180deg",
        }}
      />
    </div>
  );
};

export default FlipCard;
