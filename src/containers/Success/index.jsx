import React from "react";
import "./Success.css";

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Thanks for your purchase</h2>
        <span>Your order will arrive soon to your address</span>
        <div className="Success-map">Google maps</div>
      </div>
    </div>
  );
};

export default Success;
