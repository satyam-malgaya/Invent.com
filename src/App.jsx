// https://bootstrapmade.com/demo/Invent/Z
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import gsap from "gsap";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio'; // fix spelling

const App = () => {
  return (
    <div className='w-full min-h-screen'>
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
