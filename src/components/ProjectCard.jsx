// components/ProjectCard.js
import React from "react";
import project1 from "../assets/images/medisense.png";
import project2 from "../assets/images/proj1.jpg";
import project3 from "../assets/images/proj.jpg";

const ProjectCard = ({ title, description, tech, index, link }) => {
  const projectImages = [project1, project2, project3];
  return (
    <div
      className="group relative glass-effect rounded-2xl hover:border-cyan-500/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image section */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={projectImages[index]}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 group-hover:opacity-75 transition-opacity duration-300" />
      </div>

      {/* Content section */}
      <div className="relative z-10 p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-sm bg-gray-800/80 text-cyan-300 rounded-full border border-gray-600/50 hover:border-cyan-400/50 transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Button pinned to bottom */}
        <div className="flex gap-4 mt-auto pt-4">
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 text-sm font-semibold rounded-lg 
      bg-gradient-to-r from-cyan-500 to-blue-500 
      text-white shadow-md 
      hover:from-cyan-400 hover:to-blue-400 
      hover:shadow-cyan-500/40 hover:shadow-lg 
      transition-all duration-300 ease-in-out 
      active:scale-95"
  >
    Live Demo
  </a>
</div>
      </div>
    </div>
  );
};

export default ProjectCard;