import React from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import { Order } from "../../types/Order";


type Props = {
  show: boolean,
  onHide: () => void,
  handleDelete: () => void,
  indexOrder: Order
}


export const MyVerticallyCenteredModal: React.FC<Props> = (props) => {

  const { onHide, handleDelete, indexOrder } = props;


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ви впевнені що хочете видалити запис?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {<>
          <p>{indexOrder ? indexOrder.date : " "}</p>
          <p>{indexOrder ? indexOrder.description : " "}</p>
          <p>{indexOrder ? indexOrder.id : " "}</p>
          <p>{indexOrder ? indexOrder.title : " "}</p>
        </>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}