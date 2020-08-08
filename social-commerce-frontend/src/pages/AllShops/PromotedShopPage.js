import React from 'react';

import classes from './ShopPage.css';

const promotedShopPage = () => {

    return(
        <div>
            <div className="all-promotedShops">
                <div className="boutiqueDescriptiononHover">
                    <a href="#">
                        <img className="boutiqueImg" 
                        src="boutiqueImg" src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    </a> 
                    <div className="promoted-ancestor">
                        <span className="promoted-boutiques">PROMOTED</span>
                    </div>
                 </div>

                <div>
                    <a href="#" className="boutiqueName"> 
                        Nume Magazin
                    </a>
                    
                </div>
                
                
            </div>
        </div>
    );
};

export default promotedShopPage;