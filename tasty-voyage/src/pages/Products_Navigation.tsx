import React, { useState } from 'react';
import './Products_Navigation.scss';

const Products_Navigation = () => {
  const [backgroundColor, setBackgroundColor] = useState(''); // State to manage background color

  const handleMouseOver = (index:any) => {
    // Define your color mapping based on the index
    const colorMap = ['', 'red', 'green', 'yellow', 'purple'];
    setBackgroundColor(colorMap[index] || ''); // Default to an empty string if index is out of range
  };

  const handleMouseOut = () => {
    setBackgroundColor(''); // Reset background color when mouse leaves the li
  };

  return (
    <div className='products-container' style={{ backgroundColor: backgroundColor }}>
      <ul>
        <li onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>BURGER</li>
        <li onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>PIECES</li>
        <li onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>MINCE</li>
        <li onMouseOver={() => handleMouseOver(4)} onMouseOut={handleMouseOut}>FILLETS</li>
      </ul>
    </div>
  );
};

export default Products_Navigation;
