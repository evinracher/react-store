import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./Header.css";

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fa-solid fa-basket-shopping"></i>
          <div className="Header-alert">{cart.length}</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
