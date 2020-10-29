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
    showActiveFeedback: 'positive'
  }

  togglePositiveFeedback = () => {
    this.setState({showActiveFeedback: positiveFeedback});
  }

  toggleAverageFeedback = () => {
    this.setState({showActiveFeedback: averageFeedback});
  }

  toggleNegativFeedback = () => {
    this.setState({showActiveFeedback: negativeFeedback});
  }

  render(){

    let activeFeedback;
    if(this.state.showActiveFeedback === positiveFeedback) {
      activeFeedback = <PositiveFeedback />;
    }
    if(this.state.showActiveFeedback === averageFeedback) {
      activeFeedback = <AverageFeedback />;
    }
    if(this.state.showActiveFeedback === negativeFeedback) {
      activeFeedback = <NegativeFeedback />;
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
          {activeFeedback}
        </div>
       
      </div>
    )
  }

}

export default feedback;