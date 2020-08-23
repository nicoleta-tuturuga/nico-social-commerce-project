import React from 'react';

import data from './data/promoted-shops-data.json';
import { Link } from 'react-router-dom';

import './PromotedShopPage.css';
import './commonShopsStyle.css';

const promotedShopPage = () => {

  const promotedShops = data.map((promotedShopData) => {
    return (
      <div className="promoted-shops">
        <Link to="/sellerPage" className="shop-container">
          <div className="boutique-description-hover">
            <img className="boutique-img"
              src={promotedShopData.imgPath} />
            <span className="promoted-boutiques">PROMOTED</span>
          </div>

          <p className="boutique-name promoted-boutique-name">
            {promotedShopData.name}
          </p>
        </Link>
      </div>
    )
  })

  return (
    <div className="all-shops d-flex flex-wrap justify-content-between">
      {promotedShops}
    </div>
  );
};

export default promotedShopPage;