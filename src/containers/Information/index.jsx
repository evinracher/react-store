import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./Information.css";

const Information = () => {
  const { state, addBuyer } = useContext(AppContext);
  const { cart } = state;
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(formRef.current);
    const buyer = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      city: formData.get("city"),
      country: formData.get("country"),
      state: formData.get("state"),
      postal_code: formData.get("postal_code"),
      phone: formData.get("phone"),
    };
    addBuyer(buyer);
    navigate("/checkout/payment");
  };
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact information</h2>
        </div>
        <div className="Information-form">
          <form ref={formRef}>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="Postal code" name="postal_code" />
            <input type="text" placeholder="Phone" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Back</Link>
          </div>
          <div className="Information-next">
            {/* <Link to="/checkout/payment"> */}
            <button type="submit" onClick={handleSubmit}>
              Pay
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Order:</h3>
        {cart.map((item) => (
          <div key={item.id} className="Information-item">
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
