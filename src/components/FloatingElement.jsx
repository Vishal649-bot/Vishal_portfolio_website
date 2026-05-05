// components/FloatingElement.js
import React from 'react';

const FloatingElement = ({ mousePos, delay, duration, children, className }) => {
  return (
    <div 
      className={`absolute animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;