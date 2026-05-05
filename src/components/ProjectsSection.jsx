// components/ProjectsSection.js
import React, { forwardRef } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = forwardRef((props, ref) => {
  const projectsData = [
    {
      title: "Medisense",
      description: "Successfully built an AI-powered tool that converts complex medical lab reports into clear, easy-to-understand explanations to help users make informed health decisions..",
      tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Gemini API'],
      link:"https://medi-sense-beta.vercel.app/",
      index: 0
    },
    {
      title: "Npm Package for NSE Stock Data",
      description: "Successfully built and published an open-source Node.js package to fetch live stock prices and full equity quote data from the National Stock Exchange (NSE) of India.",
      tech: ['Node.js', 'Express'],
      link:"https://www.npmjs.com/package/nse-stock-data",
      index: 1
    },
    {
      title: "B2B Marketplace",
      description: "Successfully built a B2B marketplace platform that connects suppliers and buyers, facilitating seamless transactions and communication.",
      tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', ],
      link:"https://b2b-frontend-zeta.vercel.app/",
      index: 2
    }
  ];

  return (
    <section ref={ref} className="section bg-gray-950/50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-purple-cyan">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link} 
              index={project.index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;