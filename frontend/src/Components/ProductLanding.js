import React, { useEffect, useState } from 'react'
import img1 from '../Assets/img1.jpg'
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  getProductDetails,
  updateInteractions
} from '../redux/actions/productAction'
import FeaturedProduct from './Product/FeaturedProduct'
import LikedProduct from './Product/LikedProduct'

const ProductLanding = () => {
  const params = useParams()
  const dispatch = useDispatch()

  const { product, loading, error } = useSelector(state => state.productDetails)
  const { user } = useSelector(state => state.user)

  const [productId, setProductId] = useState(params.id)
  const [userId, setUserId] = useState(user.id)

  useEffect(() => {
    dispatch(getProductDetails(productId))
    // dispatch(updateInteractions(productId, userId))
  }, [dispatch, productId, userId])

  return (
    <>
      <div className='w-full h-full'>
        <div className='w-full h-screen grid grid-cols-1 md:grid-cols-5'>
          <div className='col-span-2 h-screen flex justify-center items-center'>
            <img
              src={img1}
              alt='maggie'
              className='w-[80%] h-[80%] sm:w-[70%] sm:h-[70%] md:w-[60%] md:h-[60%]'
            />
          </div>
          <div className='w-full h-screen col-span-3 flex flex-col  justify-center items-start  p-4 pl-5'>
            <h3 className='text-2xl font-semibold my-3'>
              Maggi Masala Instant Noodles Vegetarian (70 g)
            </h3>
            <div className='flex flex-row my-2'>
              <div className='w-[50px] flex justify-between items-center p-1 ml-1 bg-green-500 rounded m-1'>
                <span className='text-[14px] pl-1'>4.4</span>
                <span className='mr-1'>
                  <AiFillStar size={17} color='white' />
                </span>
              </div>
              <span className='flex justify-start items-center p-2 font-medium mx-2'>
                853 Ratings & 71 Reviews
              </span>
            </div>
            <p className='text-2xl font-semibold my-3'>Rs 12</p>
            <div>
              <span className='text-[1rem] font-medium'>Quantity:</span>
              <div className='w-[100px] h-[30px] flex justify-evenly items-center  my-2 bg-[#000]'>
                <span className='p-1 hover:cursor-pointer'>
                  <AiOutlineMinus size={20} color='white' />
                </span>
                <div className='bg-white px-3'>2</div>
                <span className='p-1 hover:cursor-pointer'>
                  <AiOutlinePlus size={20} color='white' />
                </span>
              </div>
            </div>
            <div className='mt-6'>
              <span className='text-[1rem] font-medium'>Description:</span>
              <p className=' w-[80%] my-2'>
                Busy mornings, lazy evenings, or midnight hunger pangs, satiate
                your hunger by getting a packet of Maggi Masala Instant Noodles.
                <br />
                Consisting of good-quality spices, you can prepare a delicious
                snack with this pack of instant noodles. In just a few easy
                steps and a few minutes, you can prepare this delectable snack
                and enjoy it all by yourself or share it with your friends.
              </p>
            </div>
            <div className='w-full flex justify-start items-center my-8'>
              <div className='w-[30%] h-[40px] flex justify-center items-center p-3 m-3 border-solid border-2 border-black  rounded hover:cursor-pointer  text-[#fff] font-semibold bg-[#000]'>
                Add to cart
              </div>
              <div className='w-[30%] h-[40px] flex justify-center items-center p-3 m-3  border-solid border-2 border-black rounded hover:cursor-pointer  text-[#fff] font-semibold bg-[#000]'>
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  <div className=''>
        <FeaturedProduct />
        <LikedProduct />
      </div> */}
    </>
  )
}

export default ProductLanding
