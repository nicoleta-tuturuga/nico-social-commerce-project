import React from 'react';

import LeftSidebar from '../leftSidebar/leftSidebar';
import Footer from '../../navs/Footer/Footer';
import ShopPage from './ShopPage';
import PromotedShopPage from './PromotedShopPage';

import "./AllShops.css";


const allShopsPage = () => {

  return (

    <div>
      <div className="shops-header d-flex flex-column align-items-center">
        <h1>Indexul magazinelor</h1>
        <p>
          Bine ai venit!
        </p>
        <p>
          Vei gasi aici toata selectia noastra de branduri independente si magazine vintage.
        </p>
        <div>
          <ul className="d-flex justify-content-center">
            <li className="refine-shop-category">
              Toate magazinele
            </li>
            <li className="refine-shop-category">|</li>
            <li className="refine-shop-category">
              Vintage
            </li>
            <li className="refine-shop-category">|</li>
            <li className="refine-shop-category">
              Brand Idependent
            </li>
          </ul>
        </div>
      </div>

      <div>
        <ul className="refine-shop-user-preferences d-flex justify-content-center">
          <li className="refine-preference">
            Toate
          </li>
          <li className="refine-preference">
            Populare
          </li>
          <li className="refine-preference">
            Urmaresc
          </li>
          <li className="refine-preference">
            Magazine Noi
          </li>
        </ul>
      </div>

      <div className="shops-container">

        <div className="shops-top-details d-flex justify-content-between">
          <p>
            Colectie: 1-30 articole din 500
            </p>
          <div>
            Vezi:
              <select>
              <option value="30">30 produse</option>
              <option value="60">60 produse</option>
              <option value="90">90 produse</option>
              <option value="toate">Toate produsele</option>
            </select>
              pe pagina
            </div>
          <div>
            Afiseaza dupa:
            <select>
              <option value="popularitate">Top cele mai urmarite</option>
              <option value="noutati">Noutati</option>
              <option value="reduceri">Alfabetic</option>
              <option value="pret crescator">Doar cele pe care le urmaresc</option>
            </select>
          </div>
        </div>

        <div className="all-shops-container d-flex flex-column">
          <PromotedShopPage />
          <ShopPage />
        </div>

      </div>
    </div>
  );
};

export default allShopsPage;