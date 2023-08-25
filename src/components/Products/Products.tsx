import React, { useState } from "react";
import { useSelector } from "react-redux";
import { shoppingCartState } from '../../Store/reducers/reducer';
import { Product } from "../../types/Product";
import { Order } from "../../types/Order";
import Form from 'react-bootstrap/Form';

export const Products = () => {
  const products: Product[] = useSelector((state: shoppingCartState) => state.products);
  const orders: Order[] = useSelector((state: shoppingCartState) => state.orders)
  const [productState, setProductState] = useState<Product[]>(products);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    console.log(type);
    if (type === "all") {
      setProductState(products);
    } else {
      setProductState(products.filter(product => product.type === type));
    }
  };

  return (
    <div className="products">
      <Form.Select className="products__filter" aria-label="Default select example"  onChange={handleFilter}>
        <option value="all">All</option>
        <option value="Monitor">Monitor</option>
        <option value="Pad">Pad</option>
      </Form.Select>
      <div className="products__list">
      {productState.map((prod) => (
        <div className="products__item" key={prod.id}>
          <img className="products__item-image order-point" src={prod.photo} alt="" />

          <div className="products__item-title order-point">
            <p>Title:</p>
            <p> {prod.title}</p>
          </div>

          <div className="products__item-type order-point">
            <p>Type:</p>
            <p>{prod.type}</p>
          </div>

          <div className="products__item-guarantee order-point">
            <p>Guarantee:</p>
            <p> {prod.guarantee.start}<br/> {prod.guarantee.end}</p>
          </div>

          <div className="products__item-price order-point">
            <p>Price:</p>
            <p>
              USD:{prod.price[0].value}
              <br/>
              UAH:{prod.price[1].value}
            </p>
          </div>
          <p className="products__item-order-title order-point">
              {orders.find((order) => order.id === prod.order)?.title || ""}
            </p>
        </div>
      ))}
      </div>
    </div>
  )
}