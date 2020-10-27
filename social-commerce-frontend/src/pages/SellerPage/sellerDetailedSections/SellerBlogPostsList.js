import React from 'react';
import { Link } from 'react-router-dom';

import data from './blog/blog-data/blog-post-data.json';

import './SellerBlogPostsList.css';


const BlogPost = () => {

  const getBlogPostData = data.map((blogPost) => {
    return (
      <div key={blogPost.id} className="blog-post-container d-flex flex-column align-items-center">
        <p className="blog-post-title">{blogPost.title}</p>
        <p className="blog-post-date">{blogPost.date}</p>
        <div className="blog-post-img-container d-flex justify-content-center">
          <img src={blogPost.img} />
        </div>
        <p className="blog-post-description">{blogPost.description}</p>

        <Link to={`/sellerBlogPost/${blogPost.id}`} className="align-self-end">
          <button className="read-blog-post-btn">
            Citeste postarea...
          </button>
        </Link>
      </div>
    )
  })

  return (
    <div>
      {getBlogPostData}
    </div>
  )
}

export default BlogPost;