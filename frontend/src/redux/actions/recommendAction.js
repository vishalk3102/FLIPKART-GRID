import axios from 'axios'
import { server } from '../store'

import {
  RECOMMEND_REQUEST,
  RECOMMEND_SUCCESS,
  RECOMMEND_FAIL,
  RECOMMEND_PRODUCT_REQUEST,
  RECOMMEND_PRODUCT_SUCCESS,
  RECOMMEND_PRODUCT_FAIL,
  RECOMMEND_CATEGORY_PRODUCT_REQUEST,
  RECOMMEND_CATEGORY_PRODUCT_FAIL,
  RECOMMEND_CATEGORY_PRODUCT_SUCCESS
} from '../../constants/recommendConstants'

// const server = 'http://localhost:5000'
export const getRecommend = (interaction, category) => async dispatch => {
  try {
    dispatch({ type: RECOMMEND_REQUEST })

    // const { data } = await axios.get(`${server}/recommend`)
    // const { data } = await axios.get(`http://localhost:5000/recommend`)
    const { data } = await axios.post(`http://localhost:5000/recommend`, {
      interaction,
      category
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

export const getRecommendProducts = productIds => async dispatch => {
  try {
    dispatch({ type: RECOMMEND_PRODUCT_REQUEST })

    // const { data } = await axios.get(`${server}/recommend`)
    // const { data } = await axios.get(`http://localhost:5000/recommend`)
    const { data } = await axios.post(`${server}/recommend`, {
      ids: productIds
    })
    // await axios.get(`${server}/recommend`)

    dispatch({
      type: RECOMMEND_PRODUCT_SUCCESS,
      payload: data.products
    })
  } catch (error) {
    dispatch({
      type: RECOMMEND_PRODUCT_FAIL,
      payload: error.response.data.message
    })
  }
}

export const getRecommendCategoryProducts = productIds => async dispatch => {
  try {
    dispatch({ type: RECOMMEND_CATEGORY_PRODUCT_REQUEST })

    // const { data } = await axios.get(`${server}/recommend`)
    // const { data } = await axios.get(`http://localhost:5000/recommend`)
    const { data } = await axios.post(`${server}/recommend`, {
      ids: productIds
    })
    // await axios.get(`${server}/recommend`)

    dispatch({
      type: RECOMMEND_CATEGORY_PRODUCT_SUCCESS,
      payload: data.products
    })
  } catch (error) {
    dispatch({
      type: RECOMMEND_CATEGORY_PRODUCT_FAIL,
      payload: error.response.data.message
    })
  }
}
