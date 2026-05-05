// components/HeroSection.js
import React, { forwardRef } from "react";
import FloatingElement from "./FloatingElement";
import profileImg from '../assets/images/profile.jpg';

const HeroSection = forwardRef(({ mousePos, scrollToSection }, ref) => {
  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center"
      style={{
        background: `
          radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, 
            rgba(139, 92, 246, 0.15) 0%, 
            rgba(59, 130, 246, 0.1) 25%, 
            transparent 50%
          ),
          linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)
        `,
      }}
    >
      {/* Floating background elements */}
      <FloatingElement
        mousePos={mousePos}
        delay={0}
        duration={6}
        className="top-20 left-20 w-32 h-32 bg-gradient-purple-pink rounded-full opacity-10 blur-xl"
      />
      <FloatingElement
        mousePos={mousePos}
        delay={2}
        duration={8}
        className="bottom-32 right-32 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-15 blur-lg"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-8">
          {/* Profile image placeholder */}
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full border-4 border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 hover:scale-110 group overflow-hidden">
            <img
              src={profileImg}
              alt="Vishal Babu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient-purple-cyan animate-pulse">
          Vishal Babu
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeInUp">
          Full Stack Developer & Problem Solver
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
          <button
            onClick={() => scrollToSection("projects")}
            className="btn-primary"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-secondary"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-transparent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
