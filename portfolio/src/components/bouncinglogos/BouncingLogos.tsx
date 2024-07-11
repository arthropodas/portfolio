import React from 'react';
import './BouncingLogos.css'; // Import CSS file for styles

const BouncingLogos = ({ logos }) => {
  return (
    <div className="marquee-container">
      <div className="marquee gap-2">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className="logo" />
        ))}
      </div>
    </div>
  );
};

export default BouncingLogos;
