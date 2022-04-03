import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order summary:</h3>
        <div className="Payment-button">
          Pay with PayPal
        </div>
      </div>
    </div>
  );
};

export default Payment;
