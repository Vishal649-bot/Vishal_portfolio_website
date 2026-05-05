// components/ContactSection.js
import React, { forwardRef } from 'react';

const ContactSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient-purple-cyan">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group p-8 glass-effect rounded-2xl hover:border-purple-500/50 transition-all duration-500 card-hover">
              <div className="text-4xl mb-4 group-hover:animate-bounce">📧</div>
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <p className="text-purple-400 break-all hover:text-purple-300 transition-colors duration-300">
                vishalkumaretahkash@gmail.com
              </p>
            </div>
            
            <div className="group p-8 glass-effect rounded-2xl hover:border-cyan-500/50 transition-all duration-500 card-hover">
              <div className="text-4xl mb-4 group-hover:animate-bounce">📱</div>
              <h3 className="text-xl font-bold mb-2 text-white">Phone</h3>
              <p className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                +91 6398669637
              </p>
            </div>
          </div>
          
          <div className="text-gray-400">
            <p className="mb-6 text-lg">
              Ready to bring your ideas to life? Let's discuss how we can work together!
            </p>
            
            <div className="flex justify-center space-x-6">
              <button className="group p-4 glass-effect rounded-full hover:bg-purple-600/30 transition-all duration-300 hover:scale-110">
                <div className="text-2xl group-hover:animate-pulse"><a href="https://www.linkedin.com/in/vishal-babu-86b71420b/" target="_blank" rel="noopener noreferrer">💼</a></div>
              </button>
              <button className="group p-4 glass-effect rounded-full hover:bg-blue-600/30 transition-all duration-300 hover:scale-110">
                <div className="text-2xl group-hover:animate-pulse"><a href="https://github.com/Vishal649-bot" target="_blank" rel="noopener noreferrer">🔗</a></div>
              </button>
              <button className="group p-4 glass-effect rounded-full hover:bg-green-600/30 transition-all duration-300 hover:scale-110">
                <div className="text-2xl group-hover:animate-pulse"><a href="https://leetcode.com/u/VishalKashyap101/" target="_blank" rel="noopener noreferrer">🧑‍💻</a></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;