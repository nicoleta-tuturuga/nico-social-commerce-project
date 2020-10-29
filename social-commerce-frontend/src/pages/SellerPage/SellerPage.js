import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import "./SellerPage.css";

import SellerDetails from './sellerTopDetails/SellerDetails';

const SellerPage = () => {

  let { path, url } = useRouteMatch();

  return (
    <div>

      {/* leave this comment here to remember about de breadcrumb */}
      {/* <div className="breadcrumb"></div> */}


      <div className="seller-page-container d-flex flex-column">


        <Switch>
          <Route path={`${path}/:shopId`} component={SellerDetails}>
          </Route>
        </Switch>

      </div>

    </div>
  )
};

export default SellerPage;