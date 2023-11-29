// Banner.tsx

import React, { useEffect } from 'react';
import './Banner.scss';

const Banner = () => {

  const scrollers = document.querySelectorAll(".scroller");

  function addAnimation(){
    scrollers.forEach((scroller =>{
      scroller.setAttribute("data-animated", "true")
    }))
  }

  if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation()
  }
   

  return (
    <div className='banner-container'>
      <div className="scroller">
        <div className="scroller-inner">
          <p>100% VEGAN</p>
          <div className='banner-emoji'>&#x1F9C0;</div>
          <p>PLANT FRIENDLY</p>
          <div className='banner-emoji'>&#x1F957;</div>
          <p>HEALTHY</p>
          <div className='banner-emoji'>&#x1F957;</div>
          <p>PLANT FRIENDLY</p>
          <div className='banner-emoji'>&#x1F373;</div>
          <p>100% VEGAN</p>
          <div className='banner-emoji'>&#x1F957;</div>
          <p>PLANT FRIENDLY</p>
          <div className='banner-emoji'>&#x1F373;</div>
          <p>100% VEGAN</p>
          <p>100% VEGAN</p>
          <div className='banner-emoji'>&#x1F9C0;</div>
          <p>PLANT FRIENDLY</p>
          <div className='banner-emoji'>&#x1F957;</div>
          <p>HEALTHY</p>
          <div className='banner-emoji'>&#x1F957;</div>
          <p>PLANT FRIENDLY</p>
          <div className='banner-emoji'>&#x1F373;</div>
          <p>100% VEGAN</p>
          <div className='banner-emoji'>&#x1F957;</div>
          <p>PLANT FRIENDLY</p>
          <div className='banner-emoji'>&#x1F373;</div>
          <p>100% VEGAN</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
