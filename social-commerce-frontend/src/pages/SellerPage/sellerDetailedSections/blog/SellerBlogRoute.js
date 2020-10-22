import React from 'react';

import SellerBlogPostPage from './SellerBlogPostPage';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

const BlogRoute = () => {

  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}/:blogPostId`} component={SellerBlogPostPage} />
      </Switch>
    </div>
  )
}

export default BlogRoute;