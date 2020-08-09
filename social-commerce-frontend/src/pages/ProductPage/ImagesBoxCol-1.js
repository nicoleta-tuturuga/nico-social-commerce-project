import React from 'react';

const imagesBox = (props) => {

    return(
        <div className="col-1">
                            <div className="product-imgs">
                                <img
                                className="large-img"
                                src={ require('../../assets/images/productpage/1.jpeg')}
                                alt="product's image"
                                />
                                <img
                                className="product-image"
                                src={ require('../../assets/images/productpage/2.jpeg')}
                                alt="product's image"
                                />
                                <img
                                className="product-image"
                                src={ require('../../assets/images/productpage/3.jpeg')}
                                alt="product's image"
                                />
                                <img
                                className="product-image"
                                src={ require('../../assets/images/productpage/4.jpeg')}
                                alt="product's image"
                                />
                                <img
                                className="product-image"
                                src={ require('../../assets/images/productpage/5.jpeg')}
                                alt="product's image"
                                />
                            </div>
        </div>
    )
}

export default imagesBox;
