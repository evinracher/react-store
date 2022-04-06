import { useState, useEffect } from "react";
import initialState from "../initialState";
import config from "../config";

const API = `${config.strapi}/api/products?populate=%2A`;

const useAppState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setProducts(data.data));
  }, []);


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
      buyers: [...state.buyers, buyer],
    });
  };

  const addNewOrder = (order) => {
    setState({
      ...state,
      orders: [...state.orders, order],
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addBuyer,
    addNewOrder,
    products
  };
};

export default useAppState;
