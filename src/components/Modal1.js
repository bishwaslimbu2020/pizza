import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function Modal1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i class="fas fa-user" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form>
            <input type="text" />
            <button type="submit" onClick={handleClose}>
              submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal1;
