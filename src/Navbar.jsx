// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          ShopLogo
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/home" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
          <Link to="/products" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Products</Link>
          <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded">About</Link>
          <Link to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center py-4">
          <Link to="/home" className="text-white text-xl py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/products" className="text-white text-xl py-2" onClick={toggleMenu}>Products</Link>
          <Link to="/about" className="text-white text-xl py-2" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="text-white text-xl py-2" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
