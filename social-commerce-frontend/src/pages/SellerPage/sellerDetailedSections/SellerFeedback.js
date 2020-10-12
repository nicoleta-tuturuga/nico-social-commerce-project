import React from 'react';

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
        <p>Parerea clientilor</p>
        <ul className="d-flex">
          <li>
            <button onClick={this.togglePositiveFeedback}>Pozitiv</button>
          </li>
          <li>
            <button onClick={this.toggleAverageFeedback}>Mediu</button>
          </li>
          <li>
            <button onClick={this.toggleNegativFeedback}>Negativ</button>
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