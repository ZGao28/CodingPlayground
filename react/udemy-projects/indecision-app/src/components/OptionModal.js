import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel='selectedOption'
        onRequestClose={props.closeModal}
    >
        <h1>You Should</h1>
        {!!props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.closeModal}>Close</button>
    </Modal>
);

export default OptionModal;