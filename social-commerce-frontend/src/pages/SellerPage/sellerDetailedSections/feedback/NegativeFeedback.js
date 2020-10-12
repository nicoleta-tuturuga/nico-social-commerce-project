import React from "react";

import data from './feedback-data/negative-feedback.json';

import './CommonFeedbackStyle.css';

const averageFeedback = () => {

  const getNegativeFeedbackData = data.map((negativeFeedbackData) => {
    return (
      <div className="d-flex">
        <div className="col-md-2 feedback-img-container">
          <img src={negativeFeedbackData.productImg}></img>
        </div>
        <div className="col-md-6">
          <p>{negativeFeedbackData.productName}</p>
          <p>{negativeFeedbackData.clientComments}</p>
          <img className="feedback-img-logo" src={negativeFeedbackData.feedbackLogoImg}></img>
        </div>
        <div className="d-flex col-md-4">
          <div>
            <p>Cumparator</p>
            <p>{negativeFeedbackData.clientName}</p>
          </div>
          <div>
            <p>Data</p>
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