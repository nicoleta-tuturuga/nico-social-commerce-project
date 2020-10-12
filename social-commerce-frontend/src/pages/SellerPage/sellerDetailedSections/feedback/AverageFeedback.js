import React from "react";

import data from './feedback-data/average-feedback.json';

import './CommonFeedbackStyle.css';

const averageFeedback = () => {

  const getAverageFeedbackData = data.map((averageFeedbackData) => {
    return (
      <div className="d-flex">
        <div className="col-md-2 feedback-img-container">
          <img src={averageFeedbackData.productImg}></img>
        </div>
        <div className="col-md-6">
          <p>{averageFeedbackData.productName}</p>
          <p>{averageFeedbackData.clientComments}</p>
          <img className="feedback-img-logo" src={averageFeedbackData.feedbackLogoImg}></img>
        </div>
        <div className="d-flex col-md-4">
          <div>
            <p>Cumparator</p>
            <p>{averageFeedbackData.clientName}</p>
          </div>
          <div>
            <p>Data</p>
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