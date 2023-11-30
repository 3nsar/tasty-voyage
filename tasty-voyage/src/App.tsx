import React from 'react'
import "./App.css";
import Hero from './components/Hero/Hero';
import Banner from './components/Banner/Banner';
import { Navbar } from './components/Navbar/Navbar';
import Info1 from './components/Sections/Info1';
import Info2 from './components/Sections/Info2';
import Info3 from './components/Sections/Info3';
import Benefits from './components/Sections/Benefits';
import About from './components/About/About';

const App = () => {
  return (
    <div className='App'>
        <Navbar/>
        <Hero/>
        <Info1/>
        <Info2/>
        <Info3/>
        <Benefits/>
        <About/>
    </div>
  )
}

export default App