import React from 'react';

import Modal from '../../sellerTopDetails/SellerDetailsModal';

class addNewFeedback extends React.Component {

  state = {
    showModal: false
  }

  render() {
    return (
      <div className="add-client-feedback d-flex flex-column align-items-center">
        <p>Hi ..clientule.., adauga o recenzie pentru ultimul produs achizitionat.</p>
        <button onClick={() => this.setState({ showModal: true })}>
          <img src="/assets/images/feedback-images/add.png"></img>
        </button>

        <Modal
          show={this.state.showModal}
          handleClose={() => this.setState({ showModal: false })}
        >
          <div className="add-feedback-modal d-flex flex-column align-items-center justify-content-between">
            <p className="add-feedback-modal-title">Cum a fost ultima ta experienta? Adauga o recenzie</p>
            <textarea className="add-feedback-modal-description" placeholder="Adauga descriere..." maxLength="100"></textarea>
            <button className="add-feedback-modal-btn btn-dark">Adauga recenzie</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default addNewFeedback;