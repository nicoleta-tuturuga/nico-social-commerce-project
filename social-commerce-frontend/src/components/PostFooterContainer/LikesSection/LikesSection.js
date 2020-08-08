import React from 'react';

import classes from './LikesSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Likes = (props) => {
    
    // const currentUser =  {
    //     fullName: "Nico",
    //     id:"nico"
    //   };
    
      let likedPost = false;
      for (var i= 0; i < props.likes.length; i++){
          if(props.likes[i].id === props.currentUser.id){ 
                likedPost = true;
          }
      }
    
      let likedButtonColor = "grey";
      if(likedPost === true){
        likedButtonColor = "yellow";
      }

      let commentedPost = false;
          if(props.comments.length > 1){
            commentedPost = true;
      }
      

    return(
        <div>
            <div className="post-footer-option container">
                <div className="row">
                    <div className="col-md-4 ButtonHover"
                      onClick={() => props.onLikeClick(props.currentUser, props.ids)}>
                        <FontAwesomeIcon icon="star" color={likedButtonColor}></FontAwesomeIcon> {likedPost ? 'Liked' : 'Like'}
                    </div>
                
                    <div className="col-md-4 ButtonHover">
                       See {props.comments.length} <FontAwesomeIcon icon="comment-dots"></FontAwesomeIcon> {commentedPost ? 'Comments' : 'Comment'}
                    </div>
                  
                    <div className="col-md-4 ButtonHover">
                        <FontAwesomeIcon icon="bullhorn"></FontAwesomeIcon> Share
                    </div>
                </div>
                    {props.likes.length}
            </div>
        </div>
        );
    };

export default Likes;