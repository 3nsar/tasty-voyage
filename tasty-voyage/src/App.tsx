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
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import Products_Navigation from './pages/Products_Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


const App = () => {
  return (
    <div className='App'>
      
        <Router >
         <Navbar />
      <Routes>
       <Route path="/" element={ <Home/>}/> 
       <Route path="/products" element={<Products_Navigation />}/> 
       <Route path="/contact" element={<Contact /> }/>
      </Routes> 
      <Footer/> 
    </Router>
    </div>
  )
}

export default App