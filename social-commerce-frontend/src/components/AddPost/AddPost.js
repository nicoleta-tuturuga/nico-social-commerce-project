import React, {Component} from 'react';

import AddPostMessage from './AddPostMessage/AddPostMessage';
import AddPostForm from './MultiStepForm/AddPostForm';

class addPost extends Component {

    state = {
        displayMessage : true
    };

    displayMessageHandler = () => {
        this.setState({displayMessage : false })
    };

    displayFormHandler = () => {
        this.setState({displayMessage : true})
    };

    render(){

        const displayMessage = this.state.displayMessage;
        let button;

        if (displayMessage){
            button = <AddPostMessage onClick={this.displayMessageHandler} />
        } else {
            button = <AddPostForm onClick={this.displayFormHandler} />
        }

        return(

            <div className="container">
                {button}
            </div>

        )
    }
}

export default addPost;