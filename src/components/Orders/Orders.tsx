import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { shoppingCartState } from '../../Store/reducers/reducer';
import { Order } from "../../types/Order";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import { MyVerticallyCenteredModal } from "../ModalWindow/ModalWindow";
import { InfoMore } from "../MoreInfo/MoreInfo";
import { CSSTransition } from 'react-transition-group';

export const Orders = () => {
  const [modalShow, setModalShow] = useState(false);
  const [indexOrder, setIndexOrder] = useState<Order | undefined>(undefined); // Use undefined as initial value
  const [moreInfoArray, setMoreInfoArray] = useState<number[]>([]);
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (indexOrder) {
      dispatch({
        type: 'DELETE_ORDER',
        payLoad: indexOrder,
      });
      setModalShow(false); // Close the modal after deletion
    }
  }

  const handleClick = (point: number) => {
    if (moreInfoArray.includes(point)) {
      setMoreInfoArray(moreInfoArray.filter((num) => num !== point))
    } else {
      setMoreInfoArray([...moreInfoArray, point])
    }
  }

  const orders: Order[] = useSelector((state: shoppingCartState) => state.orders);

  return (
    <div className="orders">
      <h1>Orders</h1>
      {orders.map((index: Order) => (
        <div className="order-list" key={index.id} >
          <div className="order-list__name order-point">
            <p>Name :</p> <p>{index.title}</p>
          </div>
          <div className="order-list__count order-point">
            <p>Count of products :</p> <p> {index.products.length}</p>
          </div>
          <div className="order-list__date order-point">
            <p>Date :</p> <p>{index.date}</p>
          </div>
          <div className="order-list__sum order-point">
            <p>Sum USD : {index.products.reduce((sum, next) => sum + next.price[0].value, 0)}</p>
            <p>Sum UAH : {index.products.reduce((sum, next) => sum + next.price[1].value, 0)}</p>
          </div>
          <Button variant="primary" onClick={() => { setModalShow(true); setIndexOrder(index) }}>
            Deleate
          </Button>
          <Button variant="primary" onClick={() => handleClick(index.id)}>More info</Button>
          <CSSTransition
            in={moreInfoArray.includes(index.id)}
            timeout={300}
            classNames="info-more"
            unmountOnExit
          >
            <div className="info-more">
              {moreInfoArray.includes(index.id) ? <InfoMore id={index.id} /> : null}
            </div>
          </CSSTransition>
        </div>
      ))}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleDelete={handleDelete}
        indexOrder={indexOrder}
      />
    </div>
  )
}
