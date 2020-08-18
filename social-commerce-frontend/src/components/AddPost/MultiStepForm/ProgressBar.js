import React from "react";

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

class StepProgressBar extends React.Component {

    render() {
      return (
        <div>
        <br />
        <ProgressBar
          percent={this.props.percent}     
          filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        >
          
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                alt=""
                style={{ filter: 'grayscale(${accomplished ? 0 : 80}%)' }}
                width="30"
                src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                alt=""
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                alt=""
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="40"
                src='/assets/images/progressBar/dimensions.png'
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img 
                alt=""
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
              />
            )}
          </Step>
        </ProgressBar>
        </div>
      );
    }
  }

export default StepProgressBar;