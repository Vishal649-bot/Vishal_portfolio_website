// components/AboutSection.js
import React, { forwardRef } from 'react';

const AboutSection = forwardRef((props, ref) => {
  return (
    <section 
      ref={ref}
      className="section bg-gray-950/50"
    >
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-purple-cyan">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Education & Journey</h3>
            
            <div className="space-y-6">
              <div className="group p-6 glass-effect rounded-xl hover:border-purple-500/50 transition-all duration-300 card-hover">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover:animate-pulse" />
                  <h4 className="text-lg font-semibold text-white">Master of Computer Application</h4>
                </div>
                <p className="text-gray-400">Galgotia University, Noida</p>
                <p className="text-cyan-400 font-medium">June 2026</p>
              </div>

              <div className="group p-6 glass-effect rounded-xl hover:border-cyan-500/50 transition-all duration-300 card-hover">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3 group-hover:animate-pulse" />
                  <h4 className="text-lg font-semibold text-white">Bachelor of Computer Application</h4>
                </div>
                <p className="text-gray-400">Dr. Ambedkar University, Agra</p>
                <p className="text-cyan-400 font-medium">May 2023</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-6xl mb-6 animate-float">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Achievements</h3>
            <div className="p-6 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30 card-hover">
              <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
              <p className="text-gray-300">DSA Problems Solved on LeetCode</p>
              <br />
              <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
              <p className="text-gray-300">Downloads on NPM Package</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;