import { action } from '../actions/action'
import {Order} from '../../types/Order';
import { Product } from '../../types/Product';
import { orders, products } from '../data';


export interface shoppingCartState { orders: Order[], products: Product[]}
const initialState: shoppingCartState = {orders: orders, products: products};
export const shoppingCartReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case 'DELETE_ORDER':
      if (state.orders && action.payLoad.id) {
        window.console.log(action.payLoad)
        const newOrders = state.orders.filter((order) => order.id !== action.payLoad.id)
        return {...state, orders:newOrders};
      } else {
        return state
      }
    default:
      return state;
  }
}