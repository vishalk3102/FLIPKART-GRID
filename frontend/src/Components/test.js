import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecommend } from '../redux/actions/recommendAction'

const Test = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const interaction = [
      'B019MDXIXG',
      'B01ADDSL9U',
      'B01B3Q4Q0O',
      'B01DXHX81O',
      'B01FWRXN0Y'
    ]
    dispatch(getRecommend(interaction))
  }, [dispatch])
  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default Test
