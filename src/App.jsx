// https://bootstrapmade.com/demo/Invent/Z
import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './components/Contact';
import Services from './Pages/Services';
import Pricing from './Pages/Pricing';
import Team from './Pages/Team';
import Portfolio from './Pages/Portfolio'; // fix spelling

const App = () => {
  return (
    <div id='main' className='w-full min-h-screen'>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
      
    </div>
  );
};

export default App;
