import React from "react";

import data from './feedback-data/average-feedback.json';

import './CommonFeedbackStyle.css';

import AddFeedback from './AddFeedback';


const averageFeedback = () => {

  let showAverageFeedback;

  let getAverageFeedbackData = data.map((averageFeedbackData) => {
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

  if (data.length === 0) {
    showAverageFeedback =
      <div className="no-feedback-default-message d-flex justify-content-center">
        <p>Momentan, nu exista nicio recenzie la aceasta categorie.</p>
      </div>
  } else {
    showAverageFeedback = getAverageFeedbackData;
  }

  return (
    <div>
      {showAverageFeedback}

      <div>
        <AddFeedback />
      </div>
    </div>
  )
}

export default averageFeedback;