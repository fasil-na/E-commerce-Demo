import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to Our Website</h1>
      <p>Explore our latest products and offers!</p>
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
