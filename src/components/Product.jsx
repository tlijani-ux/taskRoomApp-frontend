// Product.js
import React from 'react';

function Product({ imageSrc, title, description }) {
  return (
    <div className="product">
      <img className="product-image" src={imageSrc} alt={title} />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
    </div>
  );
}

export default Product;
