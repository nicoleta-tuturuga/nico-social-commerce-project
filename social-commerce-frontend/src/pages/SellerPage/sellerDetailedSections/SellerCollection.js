import React from 'react';

import './SellerCollection.css';
import data from '../data/seller-products-data.json';

import LeftSidebar from '../../leftSidebar/leftSidebar';

import { Link } from 'react-router-dom';

const sellerCollection = () => {

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
    <div className="d-flex">

      <div className="col-md-2">
        <LeftSidebar />
      </div>

      <div className="col-md-10">
        <div className="top-wraper d-flex justify-content-between">
          <div className="top-wraper-collection">
            Colectie: 1-30 articole din 500
            </div>
          <div className="top-wraper-items-per-page">
            Vezi:
              <select className="showed-per-page">
              <option value="30">30 produse</option>
              <option value="60">60 produse</option>
              <option value="90">90 produse</option>
              <option value="toate">Toate produsele</option>
            </select>
                        pe pagina
            </div>
          <div className="top-wraper-sortby">
            Afiseaza dupa:
              <select className="client-option">
              <option value="popularitate">Popularitate</option>
              <option value="noutati">Noutati</option>
              <option value="reduceri">Reduceri</option>
              <option value="pret crescator">Pret crescator</option>
              <option value="pret descrescator">Pret descrescator</option>
            </select>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-between">
          {getSellerProductDetails}
        </div>
      </div>
    </div>
  );
};

export default sellerCollection;