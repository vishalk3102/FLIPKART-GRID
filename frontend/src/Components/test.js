import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getRecommend,
  getRecommendProducts
} from '../redux/actions/recommendAction'
import ProductCard from '../Components/Home/ProductCard'

const Test = () => {
  const dispatch = useDispatch()
  const { loading, productIds } = useSelector(state => state.recommend)

  useEffect(() => {
    // const interaction = ['B01DXHX81O', 'B01B3Q4Q0O']
    const interaction = [
      'B019MDXIXG',
      'B01ADDSL9U',
      'B01B3Q4Q0O',
      'B01DXHX81O',
      'B01FWRXN0Y'
    ]
    dispatch(getRecommend(interaction))
    // dispatch(getRecommendProducts(products))
    // }
  }, [dispatch])

  return (
    <>
      <h1>jsdhfcsoip</h1>

      {productIds &&
        productIds.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
    </>
  )
}

export default Test
