import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Assets/productimage-1.jpg'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const ProductCard = () => {
  return (
    <>
      {/* <Link className='productCard' to={`/product/${product._id}`}> */}
      <Link className='productCard' to={`/product/64ddf3967e6629dea533dc04`}>
        <div class='relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:cursor-pointer'>
          <div
            class='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'
            href='#'
          >
            <img class='object-cover' src={img} alt='product' />
            <span class='absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white'>
              39% OFF
            </span>
          </div>
          <div class='mt-4 px-5 pb-5'>
            <div href='#'>
              <h5 class='text-xl tracking-tight text-slate-900'>
                Nike Air MX Super 2500 - Red
              </h5>
            </div>
            <div class='mt-2 mb-5 flex items-center justify-between'>
              <p>
                <span class='text-3xl font-bold text-slate-900'>$449</span>
                <span class='text-sm text-slate-900 line-through'>$699</span>
              </p>
              <div class='flex items-center'>
                <svg
                  aria-hidden='true'
                  class='h-5 w-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  aria-hidden='true'
                  class='h-5 w-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  aria-hidden='true'
                  class='h-5 w-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  aria-hidden='true'
                  class='h-5 w-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  aria-hidden='true'
                  class='h-5 w-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <span class='mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold'>
                  5.0
                </span>
              </div>
            </div>
            {/* <div class='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'>
            <Link to='/' className='flex items-center m-2 p-2'>
              <AiOutlineShoppingCart size={28} />
            </Link>
            Add to cart
          </div> */}
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductCard
