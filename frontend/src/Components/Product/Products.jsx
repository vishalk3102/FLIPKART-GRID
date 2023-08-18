import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, getProduct } from '../../redux/actions/productAction'
import ProductCard from '../Home/ProductCard'
import { productListData } from '../data'

const Products = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const { loading, error, products } = useSelector(state => state.products)

  const keyword = params.keyword

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    // dispatch(getProduct())
    dispatch(getProduct(keyword))
  }, [dispatch, error, keyword])

  return (
    <>
      <section id='products' className='h-full w-full'>
        <div className='grid grid-cols-12'>
          <div className='col-span-2 h-[100%] w-[100%]'>iosdjlss;</div>
          <div className='col-span-10 h-[100%] w-[100%]'>
            <div className='flex '>
              {products &&
                products.map(product => (
                  <ProductCard key={product._id} product={product} />
                ))}
              {/*   {productListData.map(product => (
                <ProductCard key={product._id} product={product} />
              ))} */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
