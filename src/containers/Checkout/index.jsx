import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Product list</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h2>Item name</h2>
            <span>$10</span>
          </div>
          <button type="button">
            <i className="fas fa-trash-alt"/>
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Total: $10</h3>
        <Link to="/checkout/information"><button type="button">Continue</button></Link>
      </div>
    </div>
  );
};

export default Checkout;
