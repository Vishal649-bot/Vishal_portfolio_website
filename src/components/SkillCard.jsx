// components/SkillCard.js
import React from 'react';

const SkillCard = ({ title, skills, icon, delay = 0, mousePos }) => {
  return (
    <div 
      className="group relative p-6 glass-effect rounded-2xl hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
      style={{
        animationDelay: `${delay}s`,
        transform: `translateY(${mousePos.y * 0.005}px)`,
        transition: 'transform 0.2s ease-out, scale 0.5s ease, border-color 0.3s ease',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="text-3xl mr-3 group-hover:animate-bounce">{icon}</div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-gray-800/80 text-purple-300 rounded-full border border-gray-600/50 hover:border-purple-400/50 transition-colors duration-300 hover:bg-purple-900/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;