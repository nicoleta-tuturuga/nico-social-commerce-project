import React, {Component} from 'react';

import classes from "./Price.css"

class priceStep extends Component {

    setPriceAndCantity = (event) => {
        this.props.handleDetails(event);
    };

    setDescription = (event) => {
        this.props.addDescription(event);
    }

    render(){

    return (
        <div className="form-group">
            <br />
            <br />
            <h3>Welcome from the last step. the priceStep</h3>
            <p>Select a price:</p>
            <input 
            type="text" 
            name="price"
            className="form-control"
            onChange={this.setPriceAndCantity}
            value={this.props.price}
            /> {this.props.price}$

            <br />

            <p>Select cantity: </p>
            <input 
            type="text" 
            name="cantity"
            className="form-control"
            onChange={this.setPriceAndCantity}
            value={this.props.cantity}
            />

            <br />

            <textarea 
            type="text" 
            name="description" 
            className="description"
            onChange={this.setDescription}
            value={this.props.description}
            placeholder="Add your description here..."
            />
        </div>
    )
}
}

export default priceStep;