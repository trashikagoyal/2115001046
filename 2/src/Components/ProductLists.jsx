import React from "react";
import { Link } from "react-router-dom";

function ProductLists({ products }) {
  return (
    <div>
      {products.map((product, index) => (
        <div key={`${product.productName}-${index}`}>
          <Link to={`/product/${product.productName}`}>
            {product.productName}
          </Link>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}</p>
          <p>Availability: {product.availability}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductLists;
