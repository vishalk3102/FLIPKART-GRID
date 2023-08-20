import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import productImage from '../../Assets/productimage-1.jpg'
import FeaturedProduct from './FeaturedProduct'
import LikedProduct from './LikedProduct'
import {
  clearErrors,
  getProductDetails
} from '../../redux/actions/productAction'
import toast from 'react-hot-toast'

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
import { getRecommend } from '../../redux/actions/recommendAction'
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

const ProductDetails = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const { product, loading, error } = useSelector(state => state.productDetails)

  // const [productId, setProductId] = useState(params.id)
  // const [userId, setUserId] = useState(user.id)

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
    const interaction = [
      'B019MDXIXG',
      'B01ADDSL9U',
      'B01B3Q4Q0O',
      'B01DXHX81O',
      'B01FWRXN0Y'
    ]
    dispatch(getProductDetails(params.id))
    dispatch(getRecommend(interaction))
  }, [dispatch, error, params.id])
  return (
    <>
      <section class='py-8 sm:py-8'>
        <div class='container mx-auto px-4'>
          <div class='lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16'>
            <div class='lg:col-span-3 lg:row-end-1'>
              <div class='lg:flex lg:items-start'>
                <div class='lg:order-2 lg:ml-5'>
                  <div class='max-w-xl overflow-hidden rounded-lg'>
                    <img
                      class='h-full w-full max-w-full object-cover'
                      src={`${imgData[product.index]}`}
                      alt=''
                    />
                  </div>
                </div>

                <div class='mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0'>
                  <div class='flex flex-row items-start lg:flex-col'>
                    <button
                      type='button'
                      class='flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center'
                    >
                      <img
                        class='h-full w-full object-cover '
                        src={`${imgData[product.index]}`}
                        alt=''
                      />
                    </button>
                    <button
                      type='button'
                      class='flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center'
                    >
                      <img
                        class='h-full w-full object-cover'
                        src={`${imgData[product.index]}`}
                        alt=''
                      />
                    </button>
                    <button
                      type='button'
                      class='flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center'
                    >
                      <img
                        class='h-full w-full object-cover'
                        src={`${imgData[product.index]}`}
                        alt=''
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class='lg:col-span-2 lg:row-span-2 lg:row-end-2'>
              <h1 class='sm: text-2xl font-bold text-gray-900 sm:text-3xl capitalize'>
                {product.product_title}
              </h1>

              {/* <div class='mt-5 flex items-center'>
                <div class='flex items-center'>
                  <svg
                    class='block h-4 w-4 align-middle text-yellow-500'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                      class=''
                    ></path>
                  </svg>
                  <svg
                    class='block h-4 w-4 align-middle text-yellow-500'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                      class=''
                    ></path>
                  </svg>
                  <svg
                    class='block h-4 w-4 align-middle text-yellow-500'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                      class=''
                    ></path>
                  </svg>
                  <svg
                    class='block h-4 w-4 align-middle text-yellow-500'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                      class=''
                    ></path>
                  </svg>
                  <svg
                    class='block h-4 w-4 align-middle text-yellow-500'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                      class=''
                    ></path>
                  </svg>
                </div>
                <p class='ml-2 text-sm font-medium text-gray-500'>
                  1,209 Reviews
                </p>
              </div> */}

              <h2 class='mt-8 text-base text-gray-900 font-bold'>
                {' '}
                Description
              </h2>
              <div class='mt-1 flex select-none flex-wrap items-center gap-1'>
                <p className=''>{product.description}</p>
              </div>

              <div class='mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0'>
                <div class='flex items-end'>
                  <h1 class='text-3xl font-bold'>₹ {product.price}</h1>
                </div>

                <button
                  type='button'
                  class='inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='shrink-0 mr-3 h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                    />
                  </svg>
                  Add to cart
                </button>
              </div>

              <ul class='mt-8 space-y-2'>
                <li class='flex items-center text-left text-sm font-medium text-gray-600'>
                  <svg
                    class='mr-2 block h-5 w-5 align-middle text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      class=''
                    ></path>
                  </svg>
                  Free shipping worldwide
                </li>

                <li class='flex items-center text-left text-sm font-medium text-gray-600'>
                  <svg
                    class='mr-2 block h-5 w-5 align-middle text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                      class=''
                    ></path>
                  </svg>
                  Cancel Anytime
                </li>
              </ul>
            </div>

            {/*   <div class='lg:col-span-3'>
              <div class='border-b border-gray-300'>
                <nav class='flex gap-4'>
                  <div
                    title=''
                    class='border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800'
                  >
                    {' '}
                    Description{' '}
                  </div>

                  <div
                    title=''
                    class='inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600'
                  >
                    Reviews
                    <span class='ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100'>
                      {' '}
                      1,209{' '}
                    </span>
                  </div>
                </nav>
              </div>

              <div class='mt-8 flow-root sm:mt-12'>
                <h1 class='text-3xl font-bold'>Delivered To Your Door</h1>
                <p class='mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  accusantium nesciunt fuga.
                </p>
                <h1 class='mt-8 text-3xl font-bold'>
                  From the Fine Farms of Brazil
                </h1>
                <p class='mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  numquam enim facere.
                </p>
                <p class='mt-4'>
                  Amet consectetur adipisicing elit. Optio numquam enim facere.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore rerum nostrum eius facere, ad neque.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <div className=''>
        <FeaturedProduct />
        <LikedProduct />
      </div>
    </>
  )
}

export default ProductDetails
