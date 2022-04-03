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

  const removeToCart = (itemIndex) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => index !== itemIndex),
    });
  };

  return {
    state,
    addToCart,
    removeToCart
  };
};

export default useAppState;
