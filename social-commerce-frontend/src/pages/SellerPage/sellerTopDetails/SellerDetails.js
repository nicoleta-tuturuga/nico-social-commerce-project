import React from 'react';

import SellerDetailsModal from './SellerDetailsModal';

import './SellerDetails.css';
import data from '../data/seller-details-data.json';

class sellerDetails extends React.Component {

  state = {
    showModal: false
  }

  render() {

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
                <a href="#"></a>
                <span className="tab-header">{sellerDetail.shopTabs.collection}</span>
              </li>
              <li className="seller-tab">
                <a href="#"></a>
                <span className="tab-header">{sellerDetail.shopTabs.feedback}</span>
              </li>
              <li className="seller-tab">
                <a href="#"></a>
                <span className="tab-header">{sellerDetail.shopTabs.blog}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    })

    return (
      <div className="container">
        {sellerDetailsData}
      </div>
    )
  }
}

export default sellerDetails;