import React from 'react';

import './SellerDetailsModal.css';

const sellerDetailsModal = ({show, children, handleClose}) => {

  const showHideClassName = show ? 'modal-container display-block' : 'modal-container display-none';

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        {children}
        <span className="modal-closing-btn" onClick={handleClose}>X</span>
      </div>

    </div>
  )
}

export default sellerDetailsModal;