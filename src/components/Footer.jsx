// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-800/50 bg-black/50">
      <div className="container text-center">
        <div className="mb-4">
          <div className="text-xl font-bold text-gradient-purple-cyan mb-2">
            Vishal Babu
          </div>
        </div>
        
        <p className="text-gray-400 mb-4">
          © 2025 Vishal Babu. Crafted with passion and precision.
        </p>
        
        <div className="flex justify-center space-x-4">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;