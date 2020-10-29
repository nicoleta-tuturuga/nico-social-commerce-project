import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About";
import NewsfeedPage from "./pages/NewsfeedPage";
import SellerPage from "./pages/SellerPage/SellerPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import SignIn from "./pages/LogIn/SignIn";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import AllShops from "./pages/AllShops/AllShops";
import SellerBlogRoute from './pages/SellerPage/sellerDetailedSections/blog/SellerBlogRoute';

import Navigation from "./navs/Navigation/Navigation";
import Footer from "./navs/Footer/Footer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faCoffee, faStar, faCommentDots, faBullhorn, faCloud, faAngleRight, faEnvelope, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'




library.add(faStroopwafel)
library.add(faCoffee)
library.add(faStar)
library.add(faCommentDots)
library.add(faBullhorn)
library.add(faCloud)
library.add(faAngleRight)
library.add(faEnvelope)
library.add(faHeart)
library.add(faShoppingCart)

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Navigation />
        <div className="container-fluid">

          <div className="row">

            {/* comment temporarely the left column */}
            <div className="col-md-1  center">
              {/* <h3>Left column</h3> */}

            </div>

            <div className="col-md-10 center">
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/aboutUsPage" component={About} />
                <Route path="/newsfeedPage" component={NewsfeedPage} />
                <Route path="/homePage" component={HomePage} />
                <Route path="/sellerPage" component={SellerPage} />
                <Route path="/productPage" component={ProductPage} />
                <Route path="/logInPage" component={SignIn} />
                <Route path="/shoppingCartPage" component={ShoppingCart} />
                <Route path="/allShopsPage" component={AllShops} />
                <Route path="/sellerPostPage" component={SellerBlogRoute} />

                {/* <Route path="/contact" component={Contact} /> */}
                {/* <Route component={Error} /> */}
              </Switch>
            </div>

            <div className="col-md-1">

              {/* <h4>Top countries:</h4>
                <ul className="list-group list-group-flush">     
                <li className="list-group-item">AAAAAA</li>    
                <li className="list-group-item">AAAAAA</li>    
                <li className="list-group-item">AAAAAA</li>
              </ul> */}
            </div>

            <FontAwesomeIcon />

          </div>
        </div>

        <Footer />

      </BrowserRouter>

    );
  }
};

export default App; 
