import React, { useContext } from "react";
import "./Success.css";
import AppContext from "../../context/AppContext";
import Map from "../../components/Map";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyers } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Hey {buyers[buyers.length - 1]?.name}, thanks for your purchase!</h2>
        <span>Your order will arrive soon to your address</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Success;
