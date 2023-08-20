import { configureStore } from '@reduxjs/toolkit'
import {
  productDetailsReducer,
  productsReducer
} from './reducers/productReducer'
import { userReducer } from './reducers/userReducer'
import {
  recommendProductReducer,
  recommendReducer
} from './reducers/recommendReducer'

const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    recommend: recommendReducer,
    recommendProducts: recommendProductReducer
  }
})

export default store

export const server = 'https://flipkart-grid-ppw6.onrender.com/api/v1'
