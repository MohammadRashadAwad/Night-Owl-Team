import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactPlayer from "react-player/lazy";

const VideoModal = ({ show, handleClose }) => {
  const settingModal={
    show:show,
    onHide:handleClose,
    backdrop:"static",
    size:"lg",
    keyboard:false
  }
  const settingPlayer={
    url:"https://www.youtube.com/watch?v=5mJ1xTHYFEw&list=RD5mJ1xTHYFEw&start_radio=1",
    width:"100%",
    controls:true,
    light:true


  }
  return (
    <Fragment>
      <Modal
        {...settingModal}
        
      >
        <Modal.Body>
          <ReactPlayer
            {...settingPlayer}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default VideoModal;
