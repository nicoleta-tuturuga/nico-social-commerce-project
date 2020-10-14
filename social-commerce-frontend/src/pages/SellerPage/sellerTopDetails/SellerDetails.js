import React from 'react';

import SellerDetailsModal from './SellerDetailsModal';

import './SellerDetails.css';
import data from '../data/seller-details-data.json';

import SellerFeedback from '../sellerDetailedSections/SellerFeedback';
import SellerBlog from '../sellerDetailedSections/SellerBlog';
import SellerCollection from '../sellerDetailedSections/SellerCollection';

const collectionSection = 'collection';
const feedbackSection = 'feedback';
const blogSection = 'blog';

class sellerDetails extends React.Component {


  state = {
    showModal: false,
    activeSellerSection: 'collection'
  }

  handleCollectionSectionChange = () => {
    this.setState({activeSellerSection: collectionSection});
  }

  handleFeedbackSectionChange = () => {
    this.setState({activeSellerSection: feedbackSection});
  }

  handleBlogSectionChange = () => {
    this.setState({activeSellerSection: blogSection});
  }
  
  
  render() {
  
    let shownSectionBtn;
    if(this.state.activeSellerSection === "collection") {
      shownSectionBtn = <SellerCollection/>
    }
    if(this.state.activeSellerSection === "feedback") {
      shownSectionBtn = <SellerFeedback/>
    }
    if(this.state.activeSellerSection === "blog") {
      shownSectionBtn = <SellerBlog/>
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
                <li className="seller-tab active-tab"> 
                  <button onClick={this.handleCollectionSectionChange} className="tab-header">{sellerDetail.shopTabs.collection}</button>
                </li>
                <li className="seller-tab">
                  <button onClick={this.handleFeedbackSectionChange} className="tab-header">{sellerDetail.shopTabs.feedback}</button>
                </li>
              <li className="seller-tab">
                <button onClick={this.handleBlogSectionChange} className="tab-header">{sellerDetail.shopTabs.blog}</button>
              </li>
            </ul>
          </div>
        </div>
      )
    })

    return (
      <div className="">
        {sellerDetailsData}
        {shownSectionBtn}
      </div>
    )
  }
}

export default sellerDetails;