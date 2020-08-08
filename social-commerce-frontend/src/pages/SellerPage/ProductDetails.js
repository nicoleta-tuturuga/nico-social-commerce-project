import React from 'react';

import classes from './ProductDetails.css';

const productDetails = (props) => {

    return(
        <div>
            <div className="item-threeacross">
                <div className="image-threeacross" data-text="Marimi disponibile: M">
                    <a href="#" className="item-details">
                        <img className="boutiqueImg" 
                        src="https://images.unsplash.com/photo-1473286835901-04adb1afab03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        />
                    </a>
                    
                    {/* <a href="#" className="productDescription">
                        Nume produs   
                    </a>  */}
                 </div>

                <div>
                        <a href="#" className="detailsLink name-threeacross"> 
                            Nume Produs
                        </a>
                        <p className="detailsLink price-threeacross"> 
                            50 RON 
                        </p>
                </div>
                
            </div>
        </div>
    );
};

export default productDetails;