import React from 'react';

const addPostButton = (props) => {

    return (
        <div>
            <h3>Create you new post here:</h3>
            <button className="btn btn-outline-primary"
                type="submit" 
                value="submit"
                onClick={props.onClick}> 
                Add Post
            </button>

        </div>
    )
}

export default addPostButton;