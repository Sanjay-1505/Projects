// src/ProductPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is installed: npm install axios
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`); // Replace with your API endpoint
        setProduct(response.data);
      } catch (err) {
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (error) return <div className="text-center py-16 text-red-600">{error}</div>;
  if (!product) return <div className="text-center py-16">Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <Link to="/products" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Products
      </Link>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">${product.price}</p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition duration-300"
            onClick={() => alert('Added to cart')}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
