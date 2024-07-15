import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Search from "../search/search";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <Search />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
