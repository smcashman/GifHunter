import React from 'react';
import Modal from 'react-modal';

const GifModal = (props) => {
  if (!props.selectedGif) {
    return <div></div>;
  }

  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
       <div className="gif-modal">
        <img src={ props.selectedGif.images.original.url } />
        <p className="urlTag">URL:<a href={props.selectedGif.bitly_url}>{props.selectedGif.bitly_url}</a></p>

        <button onClick={() => props.onRequestClose()}>close</button>
        <a href="mailto: name@domain.com"><button> Email me </button></a>
      </div>
    </Modal>
  );
};

export default GifModal;