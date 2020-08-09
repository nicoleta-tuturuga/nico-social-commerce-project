import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class productDescription extends Component {

    state = {
        showFullDescription: true
    };

    showMoreDescriptionHandler = () => {
        this.setState({showFullDescription : false })
    };

    showLessDescriptionHandler = () => {
        this.setState({showFullDescription : true})
    };

    render(){

        const showFullDescription = this.state.showFullDescription;
        let description;
        let button;

        if(showFullDescription){
            description = <span className="item-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and</span> 
            button = <button className="showMoreLess" onClick={this.showMoreDescriptionHandler}>
                    More...
                </button>
        } else {
            description = <span className="item-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and<span id="more">typesetting industry.Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
            </span> 
            </span>
            button = <button className="showMoreLess" onClick={this.showLessDescriptionHandler}>
                    Less...
                </button>
        }

    return(
        <div>
            <div className="col-2">
                            <h2 className="product-title">
                                TITLE                                                            
                            </h2>
                            <div className="price-and-offer">
                                <p className="price"> 10RON</p>
                            </div>
                            <div className="product-details">
                                <div className="tabs">
                                    <ul className="details-tabs">
                                        <li className="tab">
                                            <a href="#">
                                                <span>DETAILS</span>
                                            </a>
                                        </li>
                                        <li className="tab">
                                            <a href="#">
                                                <span>SIZING&CARE</span>
                                            </a>
                                        </li>
                                        <li className="tab">
                                            <a href="#">
                                               <span>RETURNS&EXCHANGE</span> 
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="details">
                                    <h1 className="name">
                                        Vintage Jacket
                                    </h1>
                                    
                                    {description}
                                    {button}
                                    
                                   
                                    
                                    <ul className="item-details">
                                        <li>
                                        Condition: Vintage
                                        </li>
                                        <li>
                                        Vintage Era: Early 1990s
                                        </li>
                                        <li>
                                        Material: Mixed
                                        </li>
                                        <li>
                                        Colour: White
                                        </li>
                                    </ul>

                                </div>
                                <div className="contact-fav">
                                    <div className="contact">
                                        <a href="#">
                                           <span><FontAwesomeIcon icon="envelope"></FontAwesomeIcon> Ask seller a question</span>
                                        </a>
                                    </div>
                                    <div className="fav-item">
                                        <a href="#">
                                            <span><FontAwesomeIcon icon="heart"></FontAwesomeIcon> Add to favourites</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="select-bag">
                                    <form>
                                        <div className="variants-selector">
                                            <div className="variant-select">
                                                <select className="select-size" value="true">
                                                    <option value="M">
                                                        M (only one available)
                                                    </option>
                                                </select>
                                                <div className="size-guide">
                                                    <a href="#">
                                                        <button className="sizeGuide">
                                                            Size Guide
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-shop-wrapper">
                                        <input                                         
                                        type="submit"
                                        name="addToBag"
                                        className="add-to-bag"
                                        value="Add to Bag"/>
                                        <span className="shopping-cart-icon"><FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon></span>
                                        </div>
                                    </form>
                                </div>
                                <div className="shipping-options">
                                    <h3>SHIPPING</h3>
                                    <p id="shipping-country">
                                    This item is shipped from ...
                                    </p>
                                    <table>
                                        <tbody className="delivery-worldwide">
                                            
                                            <th>
                                                Method
                                            </th>
                                            <th>
                                                Price
                                            </th>
                                            <th>
                                                Days
                                            </th>
                                            
                                                <td>
                                                 Romania
                                                </td>
                                                <td>
                                                    5RON
                                                </td>
                                                <td>
                                                    5 days
                                                </td>
                                            
                                                <td>
                                                    Europe EU
                                                </td>
                                                <td>
                                                    20RON
                                                </td>
                                                <td>
                                                    10 days
                                                </td>
                                           
                                                <td>
                                                    Rest of the world
                                                </td>
                                                <td>
                                                    50RON
                                                </td>
                                                <td>
                                                    15 days
                                                </td>
                                            
                                        </tbody>
                                    </table>
                                    
                                </div>
                                    <div className="more-like-this">
                                        <a href="#">
                                            More like this
                                        </a>
                                    </div>

                            </div>
                        </div>     
        </div>
    )
}
}

export default productDescription;