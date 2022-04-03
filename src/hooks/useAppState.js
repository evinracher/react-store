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

  const addToBuyer = (buyer) => {
    setState({
      ...state,
      buyer,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addToBuyer
  };
};

export default useAppState;
