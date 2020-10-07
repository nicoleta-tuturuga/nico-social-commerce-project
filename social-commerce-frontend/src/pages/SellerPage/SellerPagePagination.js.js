import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SellerPagePagination.css';


const pageFooter = () => {

  return (
    <div className="page-notation-container">
      <div className="page-notation-details">
        <p>Colectia noastra: 1-30 din 500 articole disponibile</p>
      </div>

      <div>
        <ul className="page-number">
          <li>
            <button className="page-number current-page">
              1
            </button>
          </li>
          <li>
            <button className="page-number">
              2
            </button>
          </li>
          <li>
            <button className="page-number">
              <FontAwesomeIcon icon="angle-right"></FontAwesomeIcon>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default pageFooter;