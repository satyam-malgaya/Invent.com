import React, { useState,useEffect } from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from "react-router-dom";
import gsap from "gsap";
const Navbar = () => {
    const [isScrolling,setisScrolling]=useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 useEffect(() => {

  
    const HandlerScroll=()=>{
       if(window.scrollY>50){
        setisScrolling(true)
       } else{
        setisScrolling(false)
       }
    }
    window.addEventListener("scroll",HandlerScroll)
    return () => {
        window.removeEventListener("scroll",HandlerScroll)
    };
 }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id='main' className={`fixed outline-none top-0 left-0 w-full h-[6.525rem] shadow-xl bg-white z-50 transition-all duration-300 ${
        isScrolling ? 'bg-white  shadow-xl':'bg-transparent'
    }`}>
      <div  className='max-w-7xl mx-auto px-4 h-full flex justify-between items-center'>
        <div>
          <p className='font-bold text-[1.880rem]'>Invent <span className='text-blue-600'>.</span></p>
        </div>
        
        {/* Desktop Menu */}
        <div className='md:flex flex-row gap-10 text-[1.05rem] font-medium'>
          <NavLink className='nav-link' to="/">Home</NavLink>
          <NavLink className='nav-link' to="/about">About</NavLink>
          <NavLink className='nav-link' to="/services">Services</NavLink>
          <NavLink className='nav-link' to="/portfolio">Portfolio</NavLink>
          <NavLink className='nav-link' to="/pricing">Pricing</NavLink>
          <NavLink className='nav-link' to="/team">Team</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden p-2'
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>

        {/* Desktop Get Started Button */}
        <div className='hidden md:block'>
          <button className='py-3 rounded text-[1rem] px-4 bg-[#3E5A9E] text-white hover:bg-[#2d4375] transition-colors'>
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white w-full absolute top-[6.525rem] left-0 shadow-lg`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) => `nav-link w-full text-center py-2 ${isActive ? 'active-link' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={toggleMenu}
            className={({ isActive }) => `nav-link w-full text-center py-2 ${isActive ? 'active-link' : ''}`}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) => `nav-link w-full text-center py-2 ${isActive ? 'active-link' : ''}`}
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            onClick={toggleMenu}
            className={({ isActive }) => `nav-link w-full text-center py-2 ${isActive ? 'active-link' : ''}`}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/pricing"
            onClick={toggleMenu}
            className={({ isActive }) => `nav-link w-full text-center py-2 ${isActive ? 'active-link' : ''}`}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/team"
            onClick={toggleMenu}
            className={({ isActive }) => `nav-link w-full text-center py-2 ${isActive ? 'active-link' : ''}`}
          >
            Team
          </NavLink>
          <button className="w-[90%] py-3 rounded text-[1rem] px-4 bg-[#3E5A9E] text-white hover:bg-[#2d4375] transition-colors">
            Get Started
          </button>
        </div>
      </div>

    </div>
  )
}

export default Navbar
