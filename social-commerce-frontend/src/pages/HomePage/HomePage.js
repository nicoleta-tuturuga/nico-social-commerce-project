import React from 'react'

import Newsfeed from '../../components/Newsfeed/Newsfeed';
import Carousel from 'react-bootstrap/Carousel'
import classes from './HomePage.css';
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

    return( 
    <div>
      <h1>Welcome to INN fashion</h1>

      <br/>

      <div className="container">
      <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={this.handleSelect}
      >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require('../../assets/images/homepage/1.jpeg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p className="motto">Welcome into our world.</p>
      <ul className="carousel__features">
        <li>
          <a href="#" className="women">
            SHOP WOMEN <FontAwesomeIcon icon="angle-right"></FontAwesomeIcon>
          </a>
        </li>
        <br/>
        <li>
          <a href="#" className="men">
            SHOP MEN <FontAwesomeIcon icon="angle-right"></FontAwesomeIcon>
          </a>
        </li>
      </ul>
      {/* <button>SHOP WOMEN</button>
      <br/>
      <button>SHOP MEN</button> */}
    </Carousel.Caption>
  </Carousel.Item>

  {/* src={ require('../../../../../assets/images/proressBar/dimensions.png') }  */}


  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require('../../assets/images/homepage/2.jpeg')}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require('../../assets/images/homepage/3.jpeg')}      
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require('../../assets/images/homepage/4.jpeg')}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require('../../assets/images/homepage/5.jpeg')}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require('../../assets/images/homepage/6.jpeg')}
      alt="First slide"
    />
  </Carousel.Item>

</Carousel>
</div>

      <br/>
      <br/>
      <div className="boutiques-content">
      <h2>DESCOPERA SITE-UL INN FASHION </h2>
      <a href="#" className="textDecoration">
        <h5>Cumpara piese noi sau vintage din boutique-rile disponibile <FontAwesomeIcon icon="angle-right"></FontAwesomeIcon></h5>
      </a>

      <div className="gallery-container">
        <div className="gallery-grid">
         
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>


          {/* <section className="middle-line">
            <a href="#">
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
            </a>
          
            <a href="#">
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
            </a>
         
            <a href="#">
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
            </a>
          </section>

          <section className="last-line">
            <a href="#">
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
            </a>
          
            <a href="#">
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
            </a>
         
            <a href="#">
              <img className="boutiqueImg" src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
            </a>
          </section> */}
          
      </div>
      </div>
      </div>

    </div>
    )
  }
}
export default HomePage;