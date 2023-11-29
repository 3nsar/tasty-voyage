// Hero.tsx

import React from 'react';
import './Hero.scss'; // Import the hero.scss file
import food from '../images/food/food-hero.png'

const Hero = () => {
  return (
    <div className='hero-container'>
      <h1 className='hero-text-behind'>TASTY</h1>
      <img src={food} alt="food" />
      <h1 className='hero-text-infront'>VOYAGE</h1>
    </div>
  );
};

export default Hero;
