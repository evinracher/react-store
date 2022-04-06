import React from "react";

const Product = ({ product, handleAddToCart }) => {
  const { attributes } = product;
  return (
    <div className="Products-item">
      {/* Put localhost in a constant. Maybe in .env */}
      <img src={`http://localhost:1337${attributes.image.data[0].attributes.url}`} alt={attributes.title} />
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
