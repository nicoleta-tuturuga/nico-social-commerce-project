import React from 'react'

import './HomePage.css';
import data from './data/home-shops-data.json';
import Carousel from './carousel/Carousel';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HomePage = () => {

  const homeShopsData = data.map((data) => {

    return (
      <div key={data.id}>
        <Link to={`/productPage/${data.id}`} className="home-gallery-card-item">
          <p>{data.name}</p>
          <img className="boutique-img" src={data.imgPath} />
        </Link>
      </div>
    )
  })

  return (
    <div>

      <Carousel />

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
export default HomePage;