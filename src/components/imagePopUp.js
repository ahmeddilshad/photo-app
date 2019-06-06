import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./imagePopUp.scss";

const ImagePopUp = ({ showPopUp, imageDetails, handlePopUp }) => {
  let url = "",
    id = "",
    desc = "";
  if (imageDetails) {
    url = imageDetails.urls.regular;
    desc = imageDetails.alt_description;
    id = imageDetails.id;
  }
  return (
    <Modal size="lg" show={showPopUp} onHide={handlePopUp}>
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="modal-img">
          <img src={url} alt={desc} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark">
          <a href={url} download={id}>
            Download
          </a>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImagePopUp;
