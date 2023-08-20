import { configureStore } from '@reduxjs/toolkit'
import {
  productDetailsReducer,
  productsReducer
} from './reducers/productReducer'
import { userReducer } from './reducers/userReducer'
import {
  recommendCategoryProductReducer,
  recommendProductReducer,
  recommendReducer
} from './reducers/recommendReducer'

const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    recommend: recommendReducer,
    recommendProducts: recommendProductReducer,
    recommendCategory: recommendCategoryProductReducer
  }
})

export default store

export const server = 'https://flipkart-grid-ppw6.onrender.com/api/v1'
