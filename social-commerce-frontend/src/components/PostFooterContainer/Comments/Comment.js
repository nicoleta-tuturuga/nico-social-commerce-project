import React from 'react';

import DateAndTime from "../../DateTime";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Comment = (props) => {

    return(
        <div>
            <div className="comment">
                <div className="media">
                    <div className="mediaLeft">
                        <a href="#">
                             <img className="profilePhoto" 
                             src={props.comment.user.userImage} 
                             width="60" height="60">
                             </img>
                        </a>
                    </div>
                        <div className="media-body">
                            <a href="#" className="anchor-username"><h4 className="media-heading">{props.comment.user.name}</h4></a>
                                <p>{props.comment.text}</p>
                            <a href="#" className="anchor-time">
                                <DateAndTime 
                                dateAndTime={props.comment.dateAndTime}>
                                </DateAndTime>
                            </a>
                        </div>
                </div>
            </div>
            
        </div>
        
    )
   
}

export default Comment;