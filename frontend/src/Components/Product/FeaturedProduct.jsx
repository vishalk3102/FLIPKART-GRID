import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card'
import Loader from '../Layout/Loader'

const FeaturedProduct = () => {
  const dispatch = useDispatch()
  const { loading, products } = useSelector(state => state.recommendProducts)

  return (
    <>
      <section className='h-full w-full my-10'>
        {loading === false ? (
          <div className='w-[100%] max-w-[1200px] mx-auto'>
            <h3 className='font-bold text-[1.4rem] '>
              Showing Recommended Results from All categories
            </h3>
            <div className='grid grid-cols-3 gap-5'>
              {/* {products &&
              products.map(product => (
                <Card key={product._id} product={product} />
              ))} */}
              {products &&
                products.map(product => (
                  <Card key={product.key} product={product} />
                ))}
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  )
}

export default FeaturedProduct
