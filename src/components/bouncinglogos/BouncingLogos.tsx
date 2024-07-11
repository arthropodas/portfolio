// BouncingLogos.tsx
import React from 'react';
import './BouncingLogos.css'; // Import CSS file for styles

interface BouncingLogosProps {
  logos: string[]; // Define logos as an array of string (assuming URLs or paths)
}

const BouncingLogos: React.FC<BouncingLogosProps> = ({ logos }) => {
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
