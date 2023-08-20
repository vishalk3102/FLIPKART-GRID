import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecommendProducts } from '../../redux/actions/recommendAction'
import ProductCard from '../ProductCard'
import Card from './Card'

const FeaturedProduct = () => {
  const dispatch = useDispatch()
  // const { loading, products } = useSelector(state => state.recommend)
  const { loading, products } = useSelector(state => state.recommendProducts)

  useEffect(() => {
    const products = ['B01DXHX81O', 'B01B3Q4Q0O']
    // const interaction = [
    //   'B019MDXIXG',
    //   'B01ADDSL9U',
    //   'B01B3Q4Q0O',
    //   'B01DXHX81O',
    //   'B01FWRXN0Y'
    // ]
    dispatch(getRecommendProducts(products))
  }, [dispatch])
  return (
    <>
      <section className='h-full w-full my-10'>
        <div className='w-[100%] max-w-[1200px] mx-auto'>
          <h3 className='font-bold text-[1.4rem] mb-4'>Featured Product</h3>

          <div className='grid grid-cols-3 gap-5'>
            {products &&
              products.map(product => (
                <Card key={product._id} product={product} />
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedProduct
