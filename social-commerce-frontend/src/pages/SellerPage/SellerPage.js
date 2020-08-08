import React from 'react';

import classes from "./SellerPage.css";
import LeftSidebar from '../leftSidebar/leftSidebar';
import ProductDetails from './ProductDetails';
import PageFooter from './PageFooter';

const sellerPage = () => {
    return(
        <div>
        <div className="container">

            {/* <div className="breadcrumb"></div> */}
            <div id="boutique-header-container">
                <div id="boutique-header">
                    <div className="header-image-container">
                        <img
                        className="boutique-image"
                        src={ require('../../assets/images/homepage/4.jpeg')}
                        alt="seller's image"
                        />
                    </div>
                    <div className="boutique-details">
                    What is Lorem Ipsum?
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry .</p>
                    <button>View more...</button>
                    </div>
                    
                <div id="seller-tabs-container">
                    <ul className="seller-tabs">
                        <li className="tab active-tab">
                            <a href="#" className="seller-tab"></a>
                            <span className="tab-header">Collection</span>
                            <span className="tab-itemsNumber">100 items</span>
                        </li>
                        <li className="tab">
                            <a href="#" className="seller-tab"></a>
                            <span className="tab-header">Feedback</span>
                            <span className="tab-itemsNumber">60% positive</span>
                        </li>
                        <li className="tab">
                            <a href="#" className="seller-tab"></a>
                            <span className="tab-header">Blog</span>
                            <span className="tab-itemsNumber">Best Items</span>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>

        <div className="product-grid-sticky-panel">
            <div className="col-1">
                <LeftSidebar/>
            </div>
            <div className="col-2 grid gallery-container">
                <div className="top-wraper">
                    <div className="top-wraper-collection">
                        Colectie: 1-30 articole din 500
                    </div>
                    <div className="top-wraper-itemsnumber">
                        Vezi: 
                        <select className="showed-perPage">
                            <option value="30">30 produse</option>
                            <option value="60">60 produse</option>
                            <option value="90">90 produse</option>
                            <option value="toate">Toate produsele</option>
                        </select>
                        pe pagina
                    </div>
                    <div className="top-wraper-sortyby">
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
                <div className="products-wraper gallery-grid">

                    <ProductDetails/>
                    <ProductDetails/>
                    <ProductDetails/>
                    <ProductDetails/>
                    <ProductDetails/>
                    <ProductDetails/>
                    <ProductDetails/>
                    <ProductDetails/>
                    <ProductDetails/>
                    <ProductDetails/>
                    <ProductDetails/>
                    <ProductDetails/>
                </div>
                <PageFooter/>
            </div>
            
        </div>

        </div>
        
    )
};

export default sellerPage;