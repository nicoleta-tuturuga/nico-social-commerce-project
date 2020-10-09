import React from 'react';

import "./SellerPage.css";
import LeftSidebar from '../leftSidebar/leftSidebar';
import SellerPagePagination from './SellerPagePagination.js';
import SellerDetails from './sellerTopDetails/SellerDetails';

const sellerPage = () => {

  return (
    <div>
      {/* <div className="breadcrumb"></div> */}


      <div className="seller-page-container d-flex flex-column">

        <SellerDetails></SellerDetails>

        <SellerPagePagination />
      </div>
    </div>
  )
};

export default sellerPage;