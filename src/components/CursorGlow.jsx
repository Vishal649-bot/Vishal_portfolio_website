// components/CursorGlow.js
import React from 'react';

const CursorGlow = ({ mousePos }) => {
  return (
    <div 
      className="fixed pointer-events-none rounded-full opacity-20 blur-3xl z-50 transition-all duration-300"
      style={{
        left: mousePos.x - 100,
        top: mousePos.y - 100,
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8), transparent)',
      }}
    />
  );
};

export default CursorGlow;