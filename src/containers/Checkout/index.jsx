import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { sumTotal } from "../../utils";

import "./Checkout.css";

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (itemIndex) => {
    removeFromCart(itemIndex);
  };

  const total = sumTotal(cart);

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Product list</h3>
        {!total && <h4>You haven't added products to cart</h4>}
        {cart.map((item, index) => (
          <div key={index} className="Checkout-item">
            <div className="Checkout-element">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(index)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      <div className="Checkout-sidebar">
        <h3>Total: ${total}</h3>
        {!!total && (
          <Link to="/checkout/information">
            <button type="button">Continue</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Checkout;
