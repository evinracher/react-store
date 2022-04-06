import React from "react";
import config from "../../config";

const Product = ({ product, handleAddToCart }) => {
  const attributes = product.attributes ?? product;

  const getImage = () => {
    if (product?.attributes?.image?.data[0]?.attributes?.url) {
      return config.strapi + product?.attributes?.image?.data[0]?.attributes?.url;
    }
    return product.image;
  };

  return (
    <div className="Products-item">
      <img src={getImage()} alt={attributes.title} />
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
