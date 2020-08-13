import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import './HomePage.css';
import data from './data/home-shops-data.json';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class HomePage extends React.Component {

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

    const { index, direction } = this.state;

    const homeShopsData = data.map((data) => {

      return (
        <div key={data.id}>
          <Link to="/productPage/{data.id}" className="home-gallery-card-item">
            <p>{data.name}</p>
            <img className="boutiqueImg" src={data.imgPath} />
          </Link>
        </div>
      )
    })

    return (
      <div>
        <h1>Welcome to INN fashion</h1>

        <div className="carousel-container">
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../../assets/images/homepage/1.jpeg')}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p className="carousel-motto">Welcome into our world.</p>
                <div>
                  <button className="women">
                    SHOP WOMEN <FontAwesomeIcon icon="angle-right"></FontAwesomeIcon>
                  </button>
                  <button className="men">
                    SHOP MEN <FontAwesomeIcon icon="angle-right"></FontAwesomeIcon>
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../../assets/images/homepage/2.jpeg')}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p className="carousel-motto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../../assets/images/homepage/3.jpeg')}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p className="carousel-motto">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../../assets/images/homepage/4.jpeg')}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../../assets/images/homepage/5.jpeg')}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../../assets/images/homepage/6.jpeg')}
                alt="First slide"
              />
            </Carousel.Item>

          </Carousel>
        </div>

        <div className="boutiques-container">

          <div className="boutiques-content">
            <h2>DESCOPERA SITE-UL INN FASHION </h2>
            <Link to="allShopsPage" className="go-to-all-shops-page d-flex align-items-center">
              <h5>
                Cumpara piese noi sau vintage din boutique-rile disponibile
                </h5>
              <span>
                <FontAwesomeIcon icon="angle-right" className="angle-icon"></FontAwesomeIcon>
              </span>
            </Link>
          </div>

          <div className="home-gallery-container">

            <div className="home-gallery-card">
              {homeShopsData}
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default HomePage;