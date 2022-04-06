import React from "react";
import config from "../../config";

const Product = ({ product, handleAddToCart }) => {
  const { attributes } = product;
  return (
    <div className="Products-item">
      <img src={`${config.strapi}${attributes.image.data[0].attributes.url}`} alt={attributes.title} />
      <div className="Products-item-info">
        <h2>
          {attributes.title}
          <span>${attributes.price}</span>
        </h2>
        <p>{attributes.description}</p>
      </div>
      <button type="button" onClick={() => handleAddToCart(attributes)}>
        Buy
      </button>
    </div>
  );
};

export default Product;
