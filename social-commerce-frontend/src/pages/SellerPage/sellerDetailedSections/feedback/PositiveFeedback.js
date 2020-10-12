import React from "react";

import data from './feedback-data/positive-feedback.json';

import './CommonFeedbackStyle.css';

const positiveFeedback = () => {

  const getPositiveFeedbackData = data.map((positiveData) => {
    return (
      <div className="d-flex">
        <div className="col-md-2 feedback-img-container">
          <img src={positiveData.productImg}></img>
        </div>
        <div className="col-md-6">
          <p>{positiveData.productName}</p>
          <p>{positiveData.clientComments}</p>
          <img className="feedback-img-logo" src={positiveData.feedbackLogoImg}></img>
        </div>
        <div className="d-flex col-md-4">
          <div>
            <p>Cumparator</p>
            <p>{positiveData.clientName}</p>
          </div>
          <div>
            <p>Data</p>
            <p>{positiveData.feedbackDate}</p>
          </div>
        </div>
      </div>
    )
  })


  return (
    <div>
      {getPositiveFeedbackData}
    </div>
  )
}

export default positiveFeedback;