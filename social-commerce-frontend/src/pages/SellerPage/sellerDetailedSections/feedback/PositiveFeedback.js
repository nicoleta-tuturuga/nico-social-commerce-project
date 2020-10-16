import React from "react";

import data from './feedback-data/positive-feedback.json';

import './CommonFeedbackStyle.css';

import AddFeedback from './AddFeedback';

const positiveFeedback = () => {

  let showPositiveFeedback;

  let getPositiveFeedbackData = data.map((positiveData) => {
    return (
      <div className="d-flex feedback-container">
        <div className="col-md-2 feedback-img-container d-flex align-items-center">
          <img src={positiveData.productImg}></img>
        </div>
        <div className="col-md-7">
          <p className="feedback-product-name">{positiveData.productName}</p>
          <p>{positiveData.clientComments}</p>
          <img className="feedback-img-logo" src={positiveData.feedbackLogoImg}></img>
        </div>
        <div className="d-flex col-md-3 justify-content-between">
          <div>
            <p className="feedback-client-name-title">Cumparator</p>
            <p>{positiveData.clientName}</p>
          </div>
          <div>
            <p className="feedback-date">Data</p>
            <p>{positiveData.feedbackDate}</p>
          </div>
        </div>
      </div>
    )
  })

  if (data.length === 0) {
    showPositiveFeedback =
      <div className="no-feedback-default-message d-flex justify-content-center">
        <p>Momentan, nu exista nicio recenzie la aceasta categorie.</p>
      </div>
  } else {
    showPositiveFeedback = getPositiveFeedbackData;
  }


  return (
    <div>
      {showPositiveFeedback}

      <div>
        <AddFeedback/>
      </div>
    </div>
  )
}

export default positiveFeedback;