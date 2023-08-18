import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import img from '../Assets/img1.jpg'

const ProductCard = ({ product }) => {
  return (
    <Link className='productCard' to={`/product/${product._id}`}>
      {/* <Link className='productCard' to={`/product/64ddf3967e6629dea533dc04`}> */}
      <div
        // key={product.id}
        className=' w-[80%] sm:w-[80%] md:w-[90%] h-[400px] flex flex-col justify-center items-center border-solid border-[1px] border-gray-400 mx-auto hover:cursor-pointer'
      >
        <img src={img} alt='maggie' className='w-[160px] h-[200px]' />
        <div className='ml-3'>
          <p className='w-[80%] text-[1rem] font-semibold p-1'>
            {/* {product.name} */}
          </p>
          <span className='text-[12px] font-medium p-1'>
            {/* {product.weight} */}
          </span>
          <div className='w-[50px] flex justify-between items-center p-1 ml-1 bg-green-500 rounded'>
            <span className='text-[14px] pl-1'>{5}</span>
            <span className='mr-1'>
              <AiFillStar size={17} color='white' />
            </span>
          </div>
          <span className='text-[1.3rem] font-medium p-1'>Rs {200}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
