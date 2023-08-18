import {
  UPDATE_INTERACTION_REQUEST,
  UPDATE_INTERACTION_SUCCESS,
  UPDATE_INTERACTION_FAIL,
  CLEAR_ERRORS
} from '../../constants/recommendConstants'

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case UPDATE_INTERACTION_REQUEST:
      return {
        loading: true,
        products: []
      }
    case UPDATE_INTERACTION_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProductsCount: action.payload.filteredProductsCount
      }

    case UPDATE_INTERACTION_FAIL:
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
