import {
  RECOMMEND_REQUEST,
  RECOMMEND_SUCCESS,
  RECOMMEND_FAIL,
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
        products: action.payload
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
