import React from "react";
import Product from "../Product";
import "./Products.css";

const Products = ({ products }) => {
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
