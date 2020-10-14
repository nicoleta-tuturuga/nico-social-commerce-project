import React from "react";

import data from './feedback-data/average-feedback.json';

import './CommonFeedbackStyle.css';

const averageFeedback = () => {

  const getAverageFeedbackData = data.map((averageFeedbackData) => {
    return (
      <div className="d-flex feedback-container">
        <div className="col-md-2 feedback-img-container d-flex align-items-center">
          <img src={averageFeedbackData.productImg}></img>
        </div>
        <div className="col-md-7">
          <p className="feedback-product-name">{averageFeedbackData.productName}</p>
          <p>{averageFeedbackData.clientComments}</p>
          <img className="feedback-img-logo" src={averageFeedbackData.feedbackLogoImg}></img>
        </div>
        <div className="d-flex col-md-3 justify-content-between">
          <div>
            <p className="feedback-client-name-title">Cumparator</p>
            <p>{averageFeedbackData.clientName}</p>
          </div>
          <div>
            <p className="feedback-date">Data</p>
            <p>{averageFeedbackData.feedbackDate}</p>
          </div>
        </div>
      </div>
    )
  })

  return(
    <div>
      {getAverageFeedbackData}
    </div>
  )
}

export default averageFeedback;