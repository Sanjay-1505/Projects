// src/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="bg-blue-700 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopLogo!</h1>
        <p className="text-xl mb-8">Discover our latest products and exclusive offers.</p>
        <Link
          to="/products"
          className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-400 transition duration-300"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
