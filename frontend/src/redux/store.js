import { configureStore } from 'redux'
import {
  productDetailsReducer,
  productsReducer
} from './reducers/productReducer'

const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer
  }
})

export default store

export const server = 'https://flipkart-grid-ppw6.onrender.com/api/v1'
