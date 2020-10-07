import React from 'react';

import './ProductDetails.css';
import data from './data/seller-products-data.json';

import { Link } from 'react-router-dom';

const productDetails = () => {

  const getSellerProductDetails = data.map((product) => {
    let sizesString = product.sizes.join(', ');

    return (
      <div key={product.id} className="seller-product-container">
        <div className="seller-product-image-container">
          <Link to={`/productPage/${product.id}`}>
            <img className="seller-product-image"
              src={product.imgPath}
            />
            <p className="seller-product-sizes">
              Marimi disponibile: {sizesString}
            </p>
          </Link>
        </div>

        <div>
          <Link to={`/productPage/${product.id}`} className="seller-product-name">
            {product.name}
          </Link>
          <p className="seller-product-price">
            {product.price} RON
          </p>
        </div>

      </div>
    )
  })

  return (
    <div className="d-flex flex-wrap justify-content-between">
      {getSellerProductDetails}
    </div>
  );
};

export default productDetails;