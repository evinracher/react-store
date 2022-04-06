import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import AppContext from "../../context/AppContext";
import { sumTotal } from "../../utils";
import config from "../../config";
import "./Payment.css";

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  const total = sumTotal(cart);

  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate("/checkout/success");
    }
  };

  const paypalOptions = {
    clientId: config.paypalClientId,
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order summary:</h3>
        {cart.map((item, index) => (
          <div className="Payment-item" key={index}>
            <h4>{item.title}</h4>
            <span>{item.price}</span>
          </div>
        ))}
        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={total}
          onSuccess={(data) => handlePaymentSuccess(data)}
          onError={(error) => console.log(error)}
          onCancel={(data) => console.log(data)}
        />
      </div>
    </div>
  );
};

export default Payment;
