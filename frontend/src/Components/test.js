import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecommend } from '../redux/actions/recommendAction'

const Test = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecommend())
  }, [dispatch])
  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default Test
