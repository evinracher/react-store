import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Product from "../Product";
import "./Products.css";

const Products = () => {
  const { state: { products }, addToCart } = useContext(AppContext);
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((item) => (
          <Product key={item.id} product={item} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
