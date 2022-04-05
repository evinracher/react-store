import React, { useContext } from "react";
import "./Success.css";
import AppContext from "../../context";
import Map from "../../components/Map";
import config from "../../config";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Hey {buyer.name}, thanks for your purchase!</h2>
        <span>Your order will arrive soon to your address</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Success;
