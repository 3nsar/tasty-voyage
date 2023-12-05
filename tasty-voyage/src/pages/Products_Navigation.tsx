import './Products_Navigation.scss';
import plants from "../images/food/plants-about.jpg"
import burger from "../images/food/burger.jpg"
import bowl from "../images/food/bowl.jpg"
import beans from "../images/food/beans.jpg"
import nuggets from "../images/food/nuggets.jpg"

import React, { useState } from 'react';
import './Products_Navigation.scss';
import ProductBurger from './ProductBurger';

const Products_Navigation = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleMouseOver = (image:string) => {
    setBackgroundImage(image);
  };

  const handleMouseOut = () => {
    setBackgroundImage('');
  };

  return (
    <>
    <div className='products-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <ul>
        <li onMouseOver={() => handleMouseOver(burger)} onMouseOut={handleMouseOut}>BURGER</li>
        <li onMouseOver={() => handleMouseOver(bowl)} onMouseOut={handleMouseOut}>PIECES</li>
        <li onMouseOver={() => handleMouseOver(beans)} onMouseOut={handleMouseOut}>BEANS</li>
        <li onMouseOver={() => handleMouseOver(nuggets)} onMouseOut={handleMouseOut}>FILLETS</li>
      </ul>
    </div> 
    <ProductBurger/>
    </>
  );
};

export default Products_Navigation;
