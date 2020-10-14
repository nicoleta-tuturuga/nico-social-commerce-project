import React from 'react';

import './SellerFeedback.css';

import PositiveFeedback from './feedback/PositiveFeedback';
import AverageFeedback from './feedback/AverageFeedback';
import NegativeFeedback from './feedback/NegativeFeedback';

const positiveFeedback = 'positive';
const averageFeedback = 'average';
const negativeFeedback = 'negative';

class feedback extends React.Component {

  state = {
    activeFeedback: 'positive'
  }

  togglePositiveFeedback = () => {
    this.setState({activeFeedback: positiveFeedback});
  }

  toggleAverageFeedback = () => {
    this.setState({activeFeedback: averageFeedback});
  }

  toggleNegativFeedback = () => {
    this.setState({activeFeedback: negativeFeedback});
  }

  render(){

    let showActiveFeedback;
    if(this.state.activeFeedback === positiveFeedback) {
      showActiveFeedback = <PositiveFeedback />;
    }
    if(this.state.activeFeedback === averageFeedback) {
      showActiveFeedback = <AverageFeedback />;
    }
    if(this.state.activeFeedback === negativeFeedback) {
      showActiveFeedback = <NegativeFeedback />;
    }

    return (
      <div>
        <h3 className="feedback-page-title">Parerea clientilor</h3>
        <ul className="d-flex justify-content-center feedback-navigation">
          <li>
            <button className="feedback-btn" onClick={this.togglePositiveFeedback}>Pozitiv</button>
          </li>
          <li>
            <button className="feedback-btn" onClick={this.toggleAverageFeedback}>Mediu</button>
          </li>
          <li>
            <button className="feedback-btn" onClick={this.toggleNegativFeedback}>Negativ</button>
          </li>
        </ul>

        <div>
          {showActiveFeedback}
        </div>
       
      </div>
    )
  }

}

export default feedback;