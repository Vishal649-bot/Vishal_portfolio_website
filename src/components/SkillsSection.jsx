// components/SkillsSection.js
import React, { forwardRef } from 'react';
import SkillCard from './SkillCard';

const SkillsSection = forwardRef(({ mousePos }, ref) => {
  const skillsData = [
    {
      title: "Frontend",
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind CSS'],
      icon: "🎨",
      delay: 0
    },
    {
      title: "Backend",
      skills: ['ExpressJS', 'NodeJS',],
      icon: "⚙️",
      delay: 0.2
    },
    {
      title: "Programming",
      skills: ['Python','JsavaScript'],
      icon: "💻",
      delay: 0.4
    },
    {
      title: "Database",
      skills: ['MongoDB', 'MySQL'],
      icon: "🗄️",
      delay: 0.6
    },
    {
      title: "Tools",
      skills: ['Git', 'GitHub', 'VSCode'],
      icon: "🛠️",
      delay: 0.8
    },
    {
      title: "Problem Solving",
      skills: ['Data Structures', 'Algorithms', 'LeetCode'],
      icon: "🧩",
      delay: 1
    }
  ];

  return (
    <section ref={ref} className="section">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-purple-cyan">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={index}
              title={skill.title}
              skills={skill.skills}
              icon={skill.icon}
              delay={skill.delay}
              mousePos={mousePos}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;