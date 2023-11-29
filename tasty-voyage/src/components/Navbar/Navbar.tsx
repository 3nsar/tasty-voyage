
import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { RiPlantFill } from "react-icons/ri";

export const Navbar = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotationValue = scrollY % 360; // Keep rotation between 0 and 360
      setRotation(rotationValue);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='navbar-container'>
      <div className='circle' style={{ transform: `rotate(${rotation}deg)` }}>
        <RiPlantFill />
      </div>
    </div>
  );
};
