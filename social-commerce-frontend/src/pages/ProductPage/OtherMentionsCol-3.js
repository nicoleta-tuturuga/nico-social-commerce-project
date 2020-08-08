import React from 'react';


const mentions = (props) => {

    return(
        <div>
            <div className="col-3">
                            <div id="info">
                                <div className="seller-section">
                                    <div id="banner-begin"></div>
                                    <h4>More about this store</h4>
                                    <div id="banner-end"></div>
                                    <div className="send-store-info">
                                        <a href="#" className="send-store-name">
                                            Name
                                        </a>
                                        <a href="#" className="storefront-name">
                                            Visit storefront
                                        </a>
                                    </div>
                                </div>
                                <div className="store-feedback">
                                    <a href="#">
                                        View Feedback
                                    </a>
                                </div>
                                <div className="also-from-us">
                                    <a href="#">
                                        Also from us
                                    </a>
                                    <div className="also-from-us-img">
                                        <ul className="also-from-us-imgs">
                                            <li>
                                                <div>
                                                    <a href="#">
                                                        <img src="https://images.unsplash.com/photo-1548964439-5a2ce44f9de2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                                        className="other-img-from-us"
                                                        alt="other-img-from-us"/>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <a href="#">
                                                        <img src="https://images.unsplash.com/photo-1564754860691-a2189c0aec31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=348&q=80"
                                                        className="other-img-from-us"
                                                        alt="other-img-from-us"/>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <a href="#">
                                                        <img src="https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                                        className="other-img-from-us"
                                                        alt="other-img-from-us"/>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <a href="#">
                                                        <img src="https://images.unsplash.com/photo-1502773689256-3fb05abd681f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                                        className="other-img-from-us"
                                                        alt="other-img-from-us"/>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    )
}

export default mentions;