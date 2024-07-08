import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Example API call to fetch categories
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <header className="header">
      <Link to="/" className="logo" style={{textDecoration:'none',color:'white'}}>AJIO</Link>
      <div className="search-bar">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          {categories.map((category, index) => (
            <li key={index}><a href={`/category/${category}`}>{category}</a></li>
          ))}
        </ul>
      </nav>
      <div className="icons">
        <a href="/signin" className="signin">Sign In/Join AJIO</a>
      </div>
    </header>
  );
}

export default Header;
