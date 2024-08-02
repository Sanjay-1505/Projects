// src/App.js
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import ProductPage from './ProductPage';

function App() {
  return (
    <Router>
      <Navbar />
      
<Outlet/>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<><HomePage/><ProductsPage/></> } />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
