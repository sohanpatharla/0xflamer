import React from 'react';
import { useSpring, animated } from 'react-spring';

const SVGAnimation = ({ relation }) => {
  const animations = {
    Friends: (
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" fill="green" />
      </svg>
    ),
    Lovers: (
      <svg width="100" height="100">
        <path d="M50 15 Q80 50 50 85 Q20 50 50 15 Z" fill="red" />
      </svg>
    ),
    Affection: (
      <svg width="100" height="100">
        <rect width="80" height="80" x="10" y="10" fill="orange" />
      </svg>
    ),
    Marriage: (
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" fill="blue" />
      </svg>
    ),
    Enemies: (
      <svg width="100" height="100">
        <polygon points="50,15 80,85 20,85" fill="black" />
      </svg>
    ),
    Siblings: (
      <svg width="100" height="100">
        <rect width="80" height="40" x="10" y="30" fill="purple" />
      </svg>
    ),
  };

  const styles = useSpring({
    to: { opacity: 1, transform: 'scale(1)' },
    from: { opacity: 0, transform: 'scale(0.5)' },
  });

  return <animated.div style={styles}>{animations[relation]}</animated.div>;
};

export default SVGAnimation;
