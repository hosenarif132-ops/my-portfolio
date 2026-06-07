import React, { useState, useEffect } from "react";
import { FiSun, FiMoon, FiX } from "react-icons/fi"; 
import { FaBarsStaggered } from "react-icons/fa6";
import './Navbar.css';

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="header-container">
      <nav className="flex space-between items-center wrapper navbar">
        <a href="#" className="logo">
          <span>A</span>Hosen.
        </a>

        {/* Desktop Menu */}
        <ul className="flex gap-2 desktop-list">
          <li><a href="#" className="link">home</a></li>
          <li><a href="#" className="link">service</a></li>
          <li><a href="#" className="link">about</a></li>
          <li><a href="#" className="link">projects</a></li>
          <li><a href="#" className="link">testimonial</a></li>
          <li><a href="#" className="link">contact me</a></li>
        </ul>

        <div className="flex items-center gap-2 nav-action">
          <button 
            className="icon-container border-inverse" 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          
          <a href="#" className="btn btn-desktop">let's talk</a>
          
          {/* Hamburger / Cross Button */}
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuActive ? <FiX /> : <FaBarsStaggered />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className={`mobile-list ${isMenuActive ? "active" : ""}`}>
          <li><a href="#" className="link" onClick={toggleMenu}>home</a></li>
          <li><a href="#" className="link" onClick={toggleMenu}>service</a></li>
          <li><a href="#" className="link" onClick={toggleMenu}>about</a></li>
          <li><a href="#" className="link" onClick={toggleMenu}>projects</a></li>
          <li><a href="#" className="link" onClick={toggleMenu}>testimonial</a></li>
          <li><a href="#" className="link" onClick={toggleMenu}>contact me</a></li>
          <li><a href="#" className="btn" onClick={toggleMenu}>let's talk</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;