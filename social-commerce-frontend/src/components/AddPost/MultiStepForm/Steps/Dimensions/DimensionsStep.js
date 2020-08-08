import React, {Component} from 'react';

import classes from './DimensionsStep.css';

class dimensionsStep extends Component {



    handleChange = (event) => {
        console.log(event.target.name); // the name of the form element
        console.log(event.target.value); // the value of the form element
        this.props.setDimensions(event);
    }

    render(){

    return(
        <div>
            <br />
            <br />
            <h3>Welcome from the third step. The dimensionsStep</h3>
            <p>Choose your dimensions :</p>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img 
                        alt=""
                        src={ require('../../../../../assets/images/proressBar/dimensions.png') } 
                        className="dimensionsImg"
                        />
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        
                        Umeri:
                         <input  
                        type = "text" 
                        name="Umeri" 
                        id="umeriInput" 
                        className="form-control"
                        onChange={this.handleChange}
                        // value={this.props.event.target.value}
                        value={this.props.umeri}
                        /> 

                        Talie : <input 
                         type = "text" 
                         name="Talie"
                         className="form-control"
                         onChange={this.handleChange}
                         value={this.props.talie}
                         />
                        
                        Sold : <input 
                         type = "text" 
                         name="Sold"
                         className="form-control"
                         onChange={this.handleChange}
                         value={this.props.sold}
                         />
                        
                        Bust : <input  
                         type = "text" 
                         name="Bust"
                         className="form-control"
                         onChange={this.handleChange}
                         value={this.props.bust}
                         />
                         
                        Lungime : <input  
                         type = "text" 
                         name="Lungime"
                         className="form-control"
                         onChange={this.handleChange}
                         value={this.props.lungime}
                         />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
};

export default dimensionsStep;