import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, getProduct } from '../redux/actions/productAction'
import ProductCard from './ProductCard'
import { productListData } from './data'

const ProductList = ({ match }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, error, products } = useSelector(state => state.products)

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct())
  }, [dispatch, error])

  // const handleClick = () => {
  //   navigate('/product')
  // }
  return (
    <>
      <div className='w-full h-full my-5'>
        <div
          className='max-w-[1000px] w-full h-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'
          // onClick={handleClick}
        >
          {/*  {products &&
            products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))} */}
          {productListData.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList
