import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Layout.css";
import Product from "../product/Product";
import ProductList from "../productlist/ProductList";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <ProductList />
        <Product />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
