import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the ID
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  // Calculate star rating based on product rate
  const starRating = Math.round(product.rating.rate);

  return (
    <>
      <Header />
      <div className="product-detail">
        <h1 className="product-title">{product.title}</h1>
        <div className="product-info">
          <div className="product-image-container">
            <img src={product.image} alt={product.title} className="product-image" />
          </div>
          <div className="product-details">
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <div className="product-rating">
              <span className="star-rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className={index < starRating ? 'star-filled' : 'star-empty'}>★</span>
                ))}
              </span>
              <span className="rating-text">{product.rating.rate.toFixed(1)} ({product.rating.count} reviews)</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
