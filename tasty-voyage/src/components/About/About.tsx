import React from 'react'
import './About.scss'; // Import the hero.scss file
import plants from "../../images/food/plants-about.jpg"

const About = () => {
  return (
    <div className='about-container'>
        <h1>HUNGRY YET?</h1>
        <div className="about-content">
        <img src={plants} alt="plants" />
            <div className="about-text">
            <h1>WE ARE CREATING SOMETHING</h1>
            <p>We’re here to grow a positive, curious and thoughtful attitude to plant-based food. Which is why we put curiosity at the heart of everything we do. So much so, we’ve built our own vertical farm – a near-off-grid, plant playground where we’re researching how to add even more flavour, nutrition and sustainability to the way we all eat.</p>
            <button>CONTACT US</button>
            </div>
        </div>
    </div>
  )
}

export default About