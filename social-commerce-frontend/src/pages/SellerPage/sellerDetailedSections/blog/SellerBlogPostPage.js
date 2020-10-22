import React from 'react';

import data from './blog-data/blog-post-data.json';

const blogPostPage = (props) => {

  const getblogPostData = data.filter((blogPost) => {
    if (props.match.params.blogPostId === blogPost.id) {
      return true;
    }
  })

  const showBlogPost = getblogPostData.map((blogPost) => {
    return (
      <div key={blogPost.id} className="d-flex flex-column align-items-center">
        <h1>Seller Titlleeeee</h1>
        <p className="blog-post-title">{blogPost.title}</p>
        <p className="blog-post-date">{blogPost.date}</p>
        <div className="blog-post-img-container d-flex justify-content-between">
          <img src={blogPost.img} />
        </div>
        <p className="blog-post-description">{blogPost.description}</p>
        <div>
          <button>Imi place</button>
          <button>Distribuie pe Facebook</button>
          <button>Distribuie pe Instagram</button>
          <button>Salveaza</button>
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