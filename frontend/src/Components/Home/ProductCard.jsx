import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Assets/productimage-1.jpg'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import ap1 from '../../Assets/apparel/ap-img-1.jpg'
import ap2 from '../../Assets/apparel/ap-img-2.jpg'
import ap3 from '../../Assets/apparel/ap-img-3.jpeg'
import sh1 from '../../Assets/shoes/sh-img-1.jpg'
import sh2 from '../../Assets/shoes/sh-img-2.jpg'
import sh3 from '../../Assets/shoes/sh-img-3.jpg'
import wh1 from '../../Assets/watches/wh-img-1.jpg'
import wh2 from '../../Assets/watches/wh-img-2.jpg'
import wh3 from '../../Assets/watches/wh-img-3.jpg'
import jw1 from '../../Assets/jewellery/jw-img-1.jpg'
import jw2 from '../../Assets/jewellery/jw-img-2.jpg'
import jw3 from '../../Assets/jewellery/jw-img-3.jpg'
import b1 from '../../Assets/beauty/b-img-1.jpg'
import b2 from '../../Assets/beauty/b-img-2.jpg'
import b3 from '../../Assets/beauty/b-img-3.jpg'
import l1 from '../../Assets/luggage/l-img-1.jpg'
import l2 from '../../Assets/luggage/l-img-2.jpg'
import l3 from '../../Assets/luggage/l-img-3.jpg'
import gc1 from '../../Assets/giftcard/gc-img-1.jpg'
import gc2 from '../../Assets/giftcard/gc-img-2.jpg'
import gc3 from '../../Assets/giftcard/gc-img-3.jpg'
// import { ap1 } from '../Data/imgData'

const imgData = [
  ap1,
  ap2,
  ap3,
  sh1,
  sh2,
  sh3,
  wh1,
  wh2,
  wh3,
  jw1,
  jw2,
  jw3,
  b1,
  b2,
  b3,
  l1,
  l2,
  l3,
  gc1,
  gc2,
  gc3
]

const ProductCard = ({ product }) => {
  return (
    <>
      <Link className='productCard ' to={`/product/${product._id}`}>
        {/* <Link className='productCard' to={`/product/64ddf3967e6629dea533dc04`}> */}
        <div class='relative m-6 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg hover:cursor-pointer'>
          <div
            class='relative mx-3 mt-3  h-60 overflow-hidden rounded-xl flex justify-center items-center'
            href='#'
          >
            <img
              class='object-contain '
              src={`${imgData[product.index]}`}
              alt='product'
            />
          </div>
          <div class='mt-4 px-5 pb-5'>
            <div href='#'>
              <h5 class='text-xl tracking-tight text-slate-900 capitalize'>
                {product.product_title}
              </h5>
            </div>
            <div class='mt-2 mb-5 flex items-center justify-between'>
              <p>
                <span class='text-3xl font-bold text-slate-900'>
                  ₹{product.price}
                </span>
              </p>
              <div class='flex items-center'>
                {/* <svg
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
                </svg> */}
                <span class='mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold'>
                  {product.rating}
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
