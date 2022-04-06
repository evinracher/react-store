import React, { useContext } from "react";
import "./Success.css";
import AppContext from "../../context/AppContext";
import Map from "../../components/Map";
import useGoogleAddress from "../../hooks/useGoogleAddress";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyers } = state;
  const lastBuyer = buyers.length - 1;
  const location = useGoogleAddress(buyers[lastBuyer]);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Hey {buyers[lastBuyer]?.name}, thanks for your purchase!</h2>
        <span>Your order will arrive soon to your address</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
