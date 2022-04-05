import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { sumTotal } from "../../utils";
import { useNavigate } from "react-router-dom";
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
      setTimeout(() => {
        addNewOrder(newOrder);
        navigate("/checkout/success");
      }, 2000);
    }
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
        <button
          onClick={() =>
            handlePaymentSuccess({
              status: "COMPLETED",
            })
          }
        >
          Pay with PayPal ${total}
        </button>
      </div>
    </div>
  );
};

export default Payment;
