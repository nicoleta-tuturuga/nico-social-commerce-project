import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const pageFooter = () => {

    return(
        <div>
            <div className="page-notation">
                    <p>Colectia noastra: 1-30 din 500 articole disponibile</p>
                    <a href="#" className="page-notation-link">
                        Vezi tot
                    </a>

                    <div className="page-number">
                        <ul className="page-number-footer">
                            <li>
                                <a href="#" className="page-number-footer current-page">
                                    1
                                </a>
                            </li>
                            <li>
                                <a href="#" className="page-number-footer">
                                    2
                                </a>
                            </li>
                            <li>
                                <a href="#" className="page-number-footer">
                                    <FontAwesomeIcon icon="angle-right"></FontAwesomeIcon>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
        </div>
    );
};

export default pageFooter;