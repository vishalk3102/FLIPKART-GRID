import {
  RECOMMEND_REQUEST,
  RECOMMEND_SUCCESS,
  RECOMMEND_FAIL,
  RECOMMEND_PRODUCT_REQUEST,
  RECOMMEND_PRODUCT_SUCCESS,
  RECOMMEND_PRODUCT_FAIL,
  CLEAR_ERRORS
} from '../../constants/recommendConstants'

// const initialState = {
//   interaction: [
//     'B019MDXIXG',
//     'B01ADDSL9U',
//     'B01B3Q4Q0O',
//     'B01DXHX81O',
//     'B01FWRXN0Y'
//   ],
//   message: ''
// }

export const recommendReducer = (state = {}, action) => {
  switch (action.type) {
    case RECOMMEND_REQUEST:
      return {
        loading: true,
        ...state
      }
    case RECOMMEND_SUCCESS:
      return {
        loading: false,
        categoryProductIds: action.payload.categoryProductIds,
        globalProductIds: action.payload.globalProductIds,
        flag: true
      }

    case RECOMMEND_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }

    default:
      return state
  }
}
export const recommendProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case RECOMMEND_PRODUCT_REQUEST:
      return {
        loading: true,
        products: []
      }
    case RECOMMEND_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products
        // categoryProducts: action.payload.products,
        // globalProductIds: action.payload.products
      }

    case RECOMMEND_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }

    default:
      return state
  }
}
