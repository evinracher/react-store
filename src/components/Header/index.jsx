import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header__title">
        <Link to="/">PlatziConf Store</Link>
      </h1>
      <div className="Header__checkout">
        <Link to="/checkout"><i class="fa-solid fa-basket-shopping"></i></Link>
      </div>
    </div>
  );
};

export default Header;
