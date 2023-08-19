import {
  UPDATE_INTERACTION_REQUEST,
  UPDATE_INTERACTION_SUCCESS,
  UPDATE_INTERACTION_FAIL,
  RECOMMEND_REQUEST,
  RECOMMEND_SUCCESS,
  RECOMMEND_FAIL,
  CLEAR_ERRORS
} from '../../constants/recommendConstants'

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
        message: action.payload
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
