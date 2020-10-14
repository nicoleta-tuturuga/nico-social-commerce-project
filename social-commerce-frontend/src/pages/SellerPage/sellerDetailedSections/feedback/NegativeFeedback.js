import React from "react";

import data from './feedback-data/negative-feedback.json';

import './CommonFeedbackStyle.css';

const averageFeedback = () => {

  const getNegativeFeedbackData = data.map((negativeFeedbackData) => {
    return (
      <div className="d-flex feedback-container">
        <div className="col-md-2 feedback-img-container d-flex align-items-center">
          <img src={negativeFeedbackData.productImg}></img>
        </div>
        <div className="col-md-7">
          <p className="feedback-product-name">{negativeFeedbackData.productName}</p>
          <p>{negativeFeedbackData.clientComments}</p>
          <img className="feedback-img-logo" src={negativeFeedbackData.feedbackLogoImg}></img>
        </div>
        <div className="d-flex col-md-3 justify-content-between">
          <div>
            <p className="feedback-client-name-title">Cumparator</p>
            <p>{negativeFeedbackData.clientName}</p>
          </div>
          <div>
            <p className="feedback-date">Data</p>
            <p>{negativeFeedbackData.feedbackDate}</p>
          </div>
        </div>
      </div>
    )
  })

  return(
    <div>
      {getNegativeFeedbackData}
    </div>
  )
}

export default averageFeedback;