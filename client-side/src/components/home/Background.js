import React from 'react';
import './Background.css'; // Import your CSS

const Background = () => {
  return (
    <div className="background-container z-0">
      <div className="background-gradient"></div>
      <div className="shapes-container">
        {/* Main Circle with Lighting Effect */}
        <svg className="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
          {/* Define Radial Gradient for Lighting */}
          <defs>
            <radialGradient id="lightGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0.9 }} />
              <stop offset="40%" style={{ stopColor: '#f0e', stopOpacity: 0.7 }} />
              <stop offset="80%" style={{ stopColor: '#a00', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#600', stopOpacity: 0.1 }} />
            </radialGradient>
          </defs>
          
          {/* Main Circle with radial gradient */}
          <circle cx="300" cy="300" r="300" fill="url(#lightGradient)" />
          
          {/* Add small circles for additional lighting effects */}
          <circle cx="200" cy="200" r="100" fill="rgba(255, 255, 255, 0.3)" />
          <circle cx="400" cy="400" r="50" fill="rgba(255, 255, 0, 0.5)" />
          <circle cx="300" cy="100" r="80" fill="rgba(255, 0, 255, 0.4)" />
        </svg>
      </div>
    </div>
  );
};

export default Background;
