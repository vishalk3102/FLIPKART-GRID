import axios from 'axios'
import { server } from '../store'

import {
  RECOMMEND_REQUEST,
  RECOMMEND_SUCCESS,
  RECOMMEND_FAIL
} from '../../constants/recommendConstants'

// const server = 'http://localhost:5000'
export const getRecommend = interaction => async dispatch => {
  try {
    dispatch({ type: RECOMMEND_REQUEST })

    // const { data } = await axios.get(`${server}/recommend`)
    // const { data } = await axios.get(`http://localhost:5000/recommend`)
    const { data } = await axios.post(`http://localhost:5000/recommend`, {
      interaction
    })
    // await axios.get(`${server}/recommend`)

    dispatch({
      type: RECOMMEND_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: RECOMMEND_FAIL,
      payload: error.response.data.message
    })
  }
}
