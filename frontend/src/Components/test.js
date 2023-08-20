import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecommend } from '../redux/actions/recommendAction'
import ProductCard from '../Components/Home/ProductCard'

const Test = () => {
  const dispatch = useDispatch()
  const { loading, products } = useSelector(state => state.recommend)

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
      <h1>jsdhfcsoip</h1>

      {products &&
        products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
    </>
  )
}

export default Test
