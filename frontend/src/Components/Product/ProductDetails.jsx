import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import FeaturedProduct from './FeaturedProduct'
import LikedProduct from './LikedProduct'
import {
  clearErrors,
  getProductDetails
} from '../../redux/actions/productAction'
import {
  getRecommend,
  getRecommendProducts,
  getRecommendCategoryProducts
} from '../../redux/actions/recommendAction'
import toast from 'react-hot-toast'
import Loader from '../Layout/Loader'

import ap1 from '../../Assets/apparel/ap-img-1.jpg'
import ap2 from '../../Assets/apparel/ap-img-2.jpg'
import ap3 from '../../Assets/apparel/ap-img-3.jpeg'
import sh1 from '../../Assets/shoes/sh-img-1.jpg'
import sh2 from '../../Assets/shoes/sh-img-2.jpg'
import sh3 from '../../Assets/shoes/sh-img-3.jpg'
import sh4 from '../../Assets/shoes/sh-img-4.jpg'
import wh1 from '../../Assets/watches/wh-img-1.jpg'
import wh2 from '../../Assets/watches/wh-img-2.jpg'
import wh3 from '../../Assets/watches/wh-img-3.jpg'
import jw1 from '../../Assets/jewellery/jw-img-1.jpg'
import jw2 from '../../Assets/jewellery/jw-img-2.jpg'
import jw3 from '../../Assets/jewellery/jw-img-3.jpg'
import jw4 from '../../Assets/jewellery/jw-img-4.jpg'
import jw5 from '../../Assets/jewellery/jw-img-5.jpg'
import jw6 from '../../Assets/jewellery/jw-img-6.jpg'
import b1 from '../../Assets/beauty/b-img-1.jpg'
import b2 from '../../Assets/beauty/b-img-2.jpg'
import b3 from '../../Assets/beauty/b-img-3.jpg'
import b4 from '../../Assets/beauty/b-img-4.jpg'
import l1 from '../../Assets/luggage/l-img-1.jpg'
import l2 from '../../Assets/luggage/l-img-2.jpg'
import l3 from '../../Assets/luggage/l-img-3.jpg'
import gc1 from '../../Assets/giftcard/gc-img-1.jpg'
import gc2 from '../../Assets/giftcard/gc-img-2.jpg'
import gc3 from '../../Assets/giftcard/gc-img-3.jpg'
import gc4 from '../../Assets/giftcard/gc-img-4.jpg'

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
  gc3,
  jw4,
  jw5,
  jw6,
  b4,
  sh4,
  gc4
]

const ProductDetails = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const { product, loading, error } = useSelector(state => state.productDetails)
  const { categoryProductIds, globalProductIds, flag } = useSelector(
    state => state.recommend
  )

  // const [productId, setProductId] = useState(params.id)
  // const [userId, setUserId] = useState(user.id)

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
    const interaction = ['B00M2L6KFY', 'B00JWXFDMG', 'B00W5T1H9W']
    /*  const globalProductIds = [
      'B00GU82FQS',
      'B004POJT5O',
      'B000NXGR9M',
      'B00MN6TAA0',
      'B00LE5Y100'
    ] */
    dispatch(getProductDetails(params.id))
    console.log(product.product_category)
    dispatch(getRecommend(interaction, product.product_category))
  }, [dispatch, error, params.id, product.product_category])
  if (flag === true) {
    dispatch(getRecommendProducts(globalProductIds))
    dispatch(getRecommendCategoryProducts(categoryProductIds))
  }
  return (
    <>
      <section class='py-8 sm:py-8'>
        {loading === false ? (
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
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </section>
      <div className=''>
        <LikedProduct />
        <FeaturedProduct />
      </div>
    </>
  )
}

export default ProductDetails
