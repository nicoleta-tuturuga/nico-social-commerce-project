import React from 'react';

import Carousel from 'react-bootstrap/Carousel'

import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../data/carousel-data.json';


class CarouselComponent extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {

    const carouselData = data.map((item) => {
      return (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.imgPath}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p className="carousel-motto">{item.motto}</p>
            {item.womenBtn && item.motto ?
              <div>
                <button className="women">
                  {item.womenBtn} <FontAwesomeIcon icon="angle-right"></FontAwesomeIcon>
                </button>
                <button className="men">
                  {item.menBtn} <FontAwesomeIcon icon="angle-right"></FontAwesomeIcon>
                </button>
              </div>
              : null
            }
          </Carousel.Caption>
        </Carousel.Item>
      )
    });

    const { index, direction } = this.state;

    return (
      <div className="carousel-container">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >

          {carouselData}

        </Carousel>
      </div>
    )
  }
}

export default CarouselComponent;