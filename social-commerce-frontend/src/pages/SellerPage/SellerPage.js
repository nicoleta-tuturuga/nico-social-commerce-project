import React from 'react';

import "./SellerPage.css";
import LeftSidebar from '../leftSidebar/leftSidebar';
import ProductDetails from './ProductDetails';
import SellerPagePagination from './SellerPagePagination.js';
import SellerDetails from './sellerTopDetails/SellerDetails';

const sellerPage = () => {
  return (
    <div>
      {/* <div className="breadcrumb"></div> */}

      <SellerDetails></SellerDetails>

      <div className="d-flex">
        <div className="col-md-2">
          <LeftSidebar />
        </div>
        <div className="col-md-10 grid gallery-container">
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

          <div>
            <ProductDetails />
          </div>

          <SellerPagePagination />
        </div>
      </div>
    </div>
  )
};

export default sellerPage;