import React from'react';

import Comment from './Comment';
import classes from "./Comments.css";



class commentsSection extends React.Component {  

    constructor(props){
        super(props);
        this.state={value: ''};

    }

    handleTextArea = (event) => {
        console.log(event);
        console.log(event.target.value);
        this.setState({value: event.target.value});
    }

    handleSubmit = () => {
    this.props.onAddComment(this.props.id, this.state.value);
    this.state.value = "";
    }

    handleEnterTextarea = (event) => {
        if (event.keyCode === 13)
            this.handleSubmit();
    }


   render(){

    let mappedComments = Object(this.props.comments)
    .map(item => {
    return<Comment 
    comment={item}
    key={item.id} 
    />
})

    return(
        <div>
            {mappedComments}
            <textarea 
                type= "text" 
                name="comment"
                id="textArea"
                placeholder="Write your comment here..."
                onChange={this.handleTextArea} 
                rows="5" cols="20"
                onKeyUp= {this.handleEnterTextarea}
                value={this.state.value}
                >
            </textarea>
            <button className="btn btn-info" 
            type="submit" 
            value="submit" 
            onClick= {this.handleSubmit} 
            >
                Add comment
            </button>
        </div>
    )
            }
    
}

export default commentsSection; 