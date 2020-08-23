import React from 'react';

import data from './data/shops-data.json';
import { Link } from 'react-router-dom';

import './ShopPage.css';
import './commonShopsStyle.css';

const shopPage = () => {

  const shopsData = data.map((shopData) => {
    return (
      <div className="shop" key={shopData.id}>
        <Link to="/sellerPage" className="shop-container">
          <div className="boutique-description-hover">
            <img className="boutique-img"
              src={shopData.imgPath} />
            <p className="boutique-description">
              {shopData.description}
            </p>
          </div>

          <p className="boutique-name">
            {shopData.name}
          </p>
        </Link>
      </div>
    )
  })

  return (
    <div className="all-shops d-flex flex-wrap justify-content-between">
      {shopsData}
    </div>
  );
};

export default shopPage;