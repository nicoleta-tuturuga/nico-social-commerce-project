import React from 'react';

import classes from "./PostTask.css";
import CommentsSection from "../PostFooterContainer/Comments/CommentsSection";
import LikesSection from "../PostFooterContainer/LikesSection/LikesSection";
import DateTime from "../DateTime";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostTask = (props) => {


    return(
        <div className="container">
            <div className="card">
                <section className="post-heading">
                    <div className="row">
                        <div className="col-md-11"> 
                            <div className="media">
                                <div className="mediaLeft">
                                    <a href="#">
                                        <img 
                                        className="profilePhoto" 
                                        alt=""
                                        src={props.post.userPhoto} 
                                        width="60" height="60">
                                        </img>
                                    </a>
                                </div>
                                    <div className="media-body">
                                    <a href="#" className="anchor-username"><h4 className="media-heading">{props.post.name}</h4></a> 
                                    <a href="#" className="anchor-time">
                                        <DateTime 
                                            dateAndTime={props.post.dateAndTime}>
                                        </DateTime>
                                    </a>
                                    </div>
                             </div>
                        </div>
                            <div className="col-md-1">
                                    <a href="#">
                                    <FontAwesomeIcon icon="angle-down"></FontAwesomeIcon>
                                    </a> 
                            </div>
                    </div>
                </section>
                    <section className="postBody">
                        <div className="postImage">
                        <p>
                            <img 
                            className="postImage" 
                            alt=""
                            src= {props.post.postImage}>
                            </img>
                        </p>
                        </div>
                    <p>
                    {props.post.description}
                    </p>
                    </section>
                <section className="post-footer">
                    <hr></hr>
                    
                    <LikesSection 
                    likes={props.post.likes} 
                    ids={props.post.id}
                    onLikeClick={props.onLikeClick}
                    currentUser={props.currentUser}
                    comments={props.post.comments}
                    ></LikesSection>
                    
                    <CommentsSection 
                    comments={props.post.comments}
                    onAddComment={props.onAddComment}
                    id={props.post.id}
                    ></CommentsSection>

                    {/* <DateTime>
                    currentDateAndTime={props.post.dateAndTime}>
                    </DateTime> */}
                
                </section>
            </div>
         </div>
    )
    
};

    

export default PostTask;