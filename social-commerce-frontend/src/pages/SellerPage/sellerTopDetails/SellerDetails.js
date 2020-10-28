import React from 'react';

import SellerDetailsModal from './SellerDetailsModal';

import { Link } from 'react-router-dom';
import queryString from 'query-string';
import './SellerDetails.css';
import data from '../data/seller-details-data.json';

import SellerFeedback from '../sellerDetailedSections/SellerFeedback';
import SellerBlogPostsList from '../sellerDetailedSections/SellerBlogPostsList';
import SellerCollection from '../sellerDetailedSections/SellerCollection';


class sellerDetails extends React.Component {

  state = {
    showModal: false,
  }

  render() {

    const queryParam = queryString.parse(this.props.location.search);

    let queryParamSection = queryParam.section ? queryParam.section : "collection";

    let shownSectionBtn;
    if (queryParamSection === "collection") {
      shownSectionBtn = <SellerCollection />
    }
    else if (queryParamSection === "feedback") {
      shownSectionBtn = <SellerFeedback />
    }
    else if (queryParamSection === "blog") {
      shownSectionBtn = <SellerBlogPostsList />
    } else {
      shownSectionBtn = <h2 className="d-flex justify-content-center">There is no page available for you search</h2>
    }

    const sellerDetailsData = data.map((sellerDetail) => {
      return (
        <div className="seller-details-container d-flex flex-column">
          <div className="d-flex justify-content-center align-items-center">
            <div className="seller-image-container">
              <img
                className="seller-image"
                src={sellerDetail.imgPath}
              />
            </div>
            <div className="seller-details">
              <img className="seller-logo" src={sellerDetail.logo} />
              <p>{sellerDetail.shopDescription}</p>
              <button onClick={() => this.setState({ showModal: true })}>
                View more...
                </button>
            </div>

            <SellerDetailsModal
              show={this.state.showModal}
              handleClose={() => this.setState({ showModal: false })}>
              <div className="open-modal-container d-flex flex-column align-items-center">
                <img
                  className="seller-logo"
                  src={sellerDetail.logo}
                />
                <p>{sellerDetail.shopDescription}</p>
              </div>
            </SellerDetailsModal>
          </div>

          <div>
            <ul className="seller-tabs d-flex">
              <li className="seller-tab">
                <Link to={`/sellerPage/${this.props.match.params.shopId}/?section=collection`}>
                  <button className="tab-header">{sellerDetail.shopTabs.collection}</button>
                </Link>
              </li>
              <li className="seller-tab">
                <Link to={`/sellerPage/${this.props.match.params.shopId}/?section=feedback`}>
                  <button className="tab-header">{sellerDetail.shopTabs.feedback}</button>
                </Link>
              </li>
              <li className="seller-tab">
                <Link to={`/sellerPage/${this.props.match.params.shopId}/?section=blog`}>
                  <button className="tab-header">{sellerDetail.shopTabs.blog}</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )
    })

    console.log("params: ", queryParamSection.section)

    return (
      <div className="">
        {sellerDetailsData}
        {shownSectionBtn}

        hiiiiiiiiii {this.props.match.params.shopId}
      </div>
    )
  }
}

export default sellerDetails;