import { useState } from "react";
import initialState from "../initialState";

const useAppState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (newItem) => {
    setState({
      ...state,
      cart: [...state.cart, newItem],
    });
  };

  const removeFromCart = (itemIndex) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => index !== itemIndex),
    });
  };

  const addBuyer = (buyer) => {
    setState({
      ...state,
      buyer,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addBuyer
  };
};

export default useAppState;
