import React from 'react'
import Hero from '../components/Hero/Hero';
import Info1 from '../components/Sections/Info1';
import Info2 from '../components/Sections/Info2';
import Info3 from '../components/Sections/Info3';
import Benefits from '../components/Sections/Benefits';
import About from '../components/About/About';

const Home = () => {
  return (
    <>
     <Hero />
     <Info1/>
     <Info2/>
     <Info3/>
     <Benefits/>
     <About/>
        
    </>
  )
}

export default Home