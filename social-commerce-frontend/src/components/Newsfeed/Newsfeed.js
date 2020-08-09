import React from 'react'

import PostTask from '../PostTask/PostTask';
import AddPost from '../AddPost/AddPost';


class Newsfeed extends React.Component {

    state = {
        posts : [
            {
                id: "user1", 
                name: "Iacob",
                userPhoto: "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_960_720.jpg", 
                postImage: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                description: "Life is short, be an optimistic", 
                likes: [{
                  user: {
                    name: "jackie", 
                    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", 
                    id: "1"}
                }],
                comments: [{
                  user: {
                    name: "john", 
                    userImage: "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=515&q=80", 
                    id: "1"}, 
                  text: "Alohaaa!" ,
                  dateAndTime: new Date('2019-06-06 9:50:00') },
                // {
                //   user: {
                //     name: "dany", 
                //     userImage: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
                //     id: "1"}, 
                //   text: "That's the spirit!!"
                // }
                  ],
                  dateAndTime: new Date('2019-06-03 21:14:00')
            },
            {
                id: "user2",
                name: "Nico", 
                userPhoto: "data:image/jpeg;base64,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",  
                postImage: "https://images.unsplash.com/photo-1524646432175-d58115a8a854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                description: "Work hard, be grateful and enjoy life while you have it.", 
                likes: [{
                  user: {
                    name: "jackie", 
                    userImage: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    id: "1"},
                }
              ],
              comments: [{
                user: {
                  name: "jackie", 
                  userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", 
                  id: "1"}, 
                text: "Nice said",
                dateAndTime: new Date('2019-06-05 11:14:00')
                 },
               {
                user: {
                  name: "mary", 
                  userImage: "https://images.unsplash.com/photo-1482849297070-f4fae2173efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", 
                  id: "1"}, 
                text: "You go girl! Just be youuu!",
                dateAndTime: new Date('2019-06-04 21:14:00')
              }],
              dateAndTime: new Date('2019-06-03 21:14:00')
            },   
            {
                id: "user3", 
                name: "Nicu",
                userPhoto: "https://cdn.pixabay.com/photo/2015/07/31/15/01/man-869215_960_720.jpg", 
                postImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                description: "I’ll be a success when I make my first million dollars.", 
                likes: [{
                  user: {name: "jackie", userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", id: "1"}
                }],
              comments: [{
                user: {
                  name: "mom", 
                  userImage: "https://images.unsplash.com/photo-1498387727476-b30055b2ef21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
                  id: "1"}, 
                text: "puiu lui mama!",
                dateAndTime: new Date('2019-06-03 21:14:00')},
              {
                user: {
                  name: "maricica", 
                  userImage: "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80", 
                  id: "1"}, 
                text: "iar nu ai venit sa ma vezi!",
                dateAndTime: new Date('2019-06-03 21:14:00')
              },
              {
                user: {
                  name: "dad", 
                  userImage: "https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
                  id: "1"}, 
                text: "povesti:))",
                dateAndTime: new Date('2019-06-03 21:14:00')
              }],
              dateAndTime: new Date('2019-06-03 21:14:00')
          }
          ],

        currentUser : {
          name: "Utilizator nou",
          userImage: "https://images.unsplash.com/photo-1524772128034-3ecf9a73cbe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          id: 34
        }
      }

  addCurrentUsertoLikedList =(currentUser, id) => {
    //console.log(id);
    let postArr;
    for(var i = 0; i < this.state.posts.length; i++){
      if(id === this.state.posts[i].id){ 
        postArr = this.state.posts[i];
        
        this.setState({posts: this.state.posts});
      }
    }
    var isPresent = false;
    for (var j = 0; j < postArr.likes.length; j++){
      if(this.state.currentUser.id === postArr.likes[j].id){
        isPresent = true;
      }
    }
    if(isPresent === true) {
      let filtered = postArr.likes.filter(
        user => user.id !== this.state.currentUser.id);
      postArr.likes = filtered;
      console.log(filtered)
      this.setState({posts: this.state.posts})
    } else {
     postArr.likes.push(currentUser);
    }
  }

  addCommentsHandler =(id, text) => {
    
    let postArr;
    console.log(id)
    for(var i = 0; i < this.state.posts.length; i++){
      if(id === this.state.posts[i].id){
        postArr = this.state.posts[i];

        this.setState({posts: this.state.posts});
      }
    }
    let newComment = {
    user: this.state.currentUser, 
    userImage: "",
    id: "50",  
    text: text, 
    dateAndTime: new Date() 
    }
    postArr.comments.push(newComment);
    console.log(postArr)
 }

  render() {
    
    let mappedPosts = this.state.posts.map(item => {
        return <PostTask 
        post={item} 
        onLikeClick={this.addCurrentUsertoLikedList}
        key={item.id}
        onAddComment={this.addCommentsHandler}
        currentUser={this.state.currentUser}
        />
      });

    return( 
    <div>

      <AddPost></AddPost>
      {mappedPosts}

    </div>
    );
  };
};

    
export default Newsfeed;