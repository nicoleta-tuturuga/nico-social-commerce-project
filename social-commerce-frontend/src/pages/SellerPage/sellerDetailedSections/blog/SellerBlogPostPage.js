import React from 'react';

import data from './blog-data/blog-post-data.json';

import './SellerBlogPostPage.css';

const blogPostPage = (props) => {

  const getblogPostData = data.filter((blogPost) => {
    if (props.match.params.blogPostId === blogPost.id) {
      return true;
    }
  })

  const showBlogPost = getblogPostData.map((blogPost) => {
    return (
      <div key={blogPost.id} className="blog-post-page-container d-flex flex-column align-items-center">
        <h1>{blogPost.sellerTitle}</h1>
        <p className="blog-post-page-title">{blogPost.title}</p>
        <p className="blog-post-date">{blogPost.date}</p>
        <div className="blog-post-img-container d-flex justify-content-center">
          <img src={blogPost.img} />
        </div>
        <p className="blog-post-description">{blogPost.description}</p>
        <div className="blog-page-btns-container align-self-start d-flex">
          <button className="blog-like-btn d-flex align-items-center">
            <img className="blog-page-btns-icons" src="/assets/images/blog-images/like.png"></img>
            <span>Imi place</span>
            <span>0</span>
          </button>
          <button className="blog-share-on-facebook-btn d-flex align-items-center">
            <img className="blog-page-btns-icons" src="/assets/images/blog-images/facebook.png"></img>
            <span>Distribuie pe Facebook</span>
          </button>
          <button className="blog-share-on-instagram-btn d-flex align-items-center">
            <img className="blog-page-btns-icons" src="/assets/images/blog-images/instagram.png"></img>
            <span>Distribuie pe Instagram</span>
          </button>
          <button className="blog-save-post-btn d-flex align-items-center">
            <img className="blog-page-btns-icons" src="/assets/images/blog-images/save-button.png"></img>
            <span>Salveaza</span>
          </button>
        </div>
      </div>
    )
  })

  return (
    <div>
      {showBlogPost}
    </div>
  )
}

export default blogPostPage;