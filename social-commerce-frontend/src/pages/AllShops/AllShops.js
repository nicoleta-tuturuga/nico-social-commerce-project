import React from 'react';

import LeftSidebar from '../leftSidebar/leftSidebar';
import PageFooter from '../SellerPage/PageFooter';
import ShopPage from './ShopPage';
import PromotedShopPage from './PromotedShopPage';

import classes from "./AllShops.css";



const allShopsPage = () => {

    return(
        <div>
            <div className="shops-header">
                <h1>Indexul magazinelor</h1>
                <p>
                    Bine ai venit!
                </p>
                <p>
                    Vei gasi <a href="#" className="shops-header-link here">aici</a> toata selectia noastra de branduri independente si magazine vintage.
                </p>
                <div>
                    <ul className="allshops-subLinks">
                        <li className="refine-shop">
                            <span className="active">
                                Toate magazinele
                            </span>
                        </li>
                        <li className="refine-shop">|</li>
                        <li className="refine-shop">
                            <a href="#" className="shops-header-link">
                                Vintage
                            </a>
                        </li>
                        <li className="refine-shop">|</li>
                        <li className="refine-shop">
                            <a href="#" className="shops-header-link">
                                Brand Idependent
                            </a>
                        </li>
                        <li className="refine-shop">|</li>
                        <li className="refine-shop">
                            <a href="#" className="shops-header-link">
                                Multi Brand
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
                <div className="refine-tabbing-container">
                    <ul id="refine-tabs">
                        <li className="refine-preference">
                            <a href="#" className="shops-header-link">
                            Toate
                            </a>
                        </li>
                        <li className="refine-preference">
                            <a href="#" className="shops-header-link">
                            Top rated
                            </a>
                        </li>
                        <li className="refine-preference">
                            <a href="#" className="shops-header-link">
                                Ce Urmaresc
                            </a>
                        </li>
                        <li className="refine-preference">
                            <a href="#" className="shops-header-link">
                            Noutati
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="allshops-wraper">
                    <div className="allshops-col1">
                        <div className="content-type">
                            <h4>Gender</h4>
                            <a className="gender">
                            <input type="checkbox" name="woman" value="gender"/>
                                Femei
                            </a>
                            <a className="gender">
                            <input type="checkbox" name="man" value="gender"/>
                                Barbati
                            </a>
                        </div>
                    </div>

                <div className="allshops-col2">
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
                            <option value="popularitate">Top cele mai urmarite</option>
                            <option value="noutati">Noutati</option>
                            <option value="reduceri">Alfabetic</option>
                            <option value="pret crescator">Doar cele pe care le urmaresc</option>
                        </select>
                    </div>
                    </div>
                        
                <div className="allshops gallery-grid">
                    <PromotedShopPage/>
                    <PromotedShopPage/>
                    <PromotedShopPage/>
                    <ShopPage/>
                    <ShopPage/>
                    <ShopPage/>
                    <ShopPage/>
                    <ShopPage/>
                    <ShopPage/>
                    <ShopPage/>
                    <ShopPage/>
                    <ShopPage/>
                    
                    {/* <img className="boutiqueImg" src="https://images.unsplash.com/photo-1551310357-b26c1af069c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    <img className="boutiqueImg" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    <img className="boutiqueImg" src="https://images.unsplash.com/photo-1473286835901-04adb1afab03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    <img className="boutiqueImg" src="https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    <img className="boutiqueImg" src="https://images.unsplash.com/photo-1496217590455-aa63a8350eea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    <img className="boutiqueImg" src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"/>
                    <img className="boutiqueImg" src="https://images.unsplash.com/photo-1551310355-b0cfa1572b5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    <img className="boutiqueImg" src="https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    <img className="boutiqueImg" src="https://images.unsplash.com/photo-1559324926-ad3e8bab9df1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    <img className="boutiqueImg" src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    <img className="boutiqueImg" src="https://images.unsplash.com/flagged/photo-1557310298-9d6633ff5b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"/>
                    <img className="boutiqueImg" src="https://images.unsplash.com/photo-1485231183945-fffde7cc051e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/> 
                 */}
                </div>

                <PageFooter/>

            </div>
            </div>
        </div>
    );
};

export default allShopsPage;