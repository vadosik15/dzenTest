import React from "react";
import { useSelector } from "react-redux"
import { Product } from "../../types/Product";
import { CSSTransition } from 'react-transition-group';
import { shoppingCartState } from "../../Store/reducers/reducer";
type Props = {
  id: number
}
export const InfoMore: React.FC<Props> = ({ id }) => {
  const products: Product[] = useSelector((state: shoppingCartState) => state.products);

  return (
    <CSSTransition
      in={true} // Встановіть `in` в true, коли компонент має з'явитися
      timeout={300} // Тривалість анімації у мілісекундах
      classNames="more-info" // Класи для анімації
      unmountOnExit // Компонент буде видалений з DOM після завершення анімації
    >
      <div className="more-info">
        {products
          .filter((product: Product) => product.order === id)
          .map((product: Product) => (
            <div className="more-info__item" key={product.id}>
            <img className="more-info__item-image order-point" src={product.photo} alt="" />
  
            <div className="more-info__item-title order-point">
              <p>Title:</p>
              <p> {product.title}</p>
            </div>
  
            <div className="more-info__item-type order-point">
              <p>Type:</p>
              <p>{product.type}</p>
            </div>
  
            <div className="more-info__item-guarantee order-point">
              <p>Guarantee:</p>
              <p> {product.guarantee.start}<br/> {product.guarantee.end}</p>
            </div>
  
            <div className="more-info__item-price order-point">
              <p>Price:</p>
              <p>
                USD:{product.price[0].value}
                <br/>
                UAH:{product.price[1].value}
              </p>
            </div>
          </div>
          ))}
      </div>
    </CSSTransition >
  )
};