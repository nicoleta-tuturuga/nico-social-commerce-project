import React from "react";

import classes from './ProductPage.css';

import ImagesBox from './ImagesBoxCol-1';
import ProductDescription from './ProductDescriptionCol-2';
import OtherMentions from './OtherMentionsCol-3';

const productPage = (props) => {

    return(
        <div>
            <div className="container">
                <div className="content">
                    <div className="product-details-content-container">
                        
                        <ImagesBox/>

                        <ProductDescription/>
                       
                        <OtherMentions/>

                    </div>
                </div>  
            </div>

        </div>
    );
};

export default productPage;