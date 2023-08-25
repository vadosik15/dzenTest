import { createStore } from 'redux'
import { shoppingCartReducer } from './reducers/reducer'

export const store = createStore(shoppingCartReducer);