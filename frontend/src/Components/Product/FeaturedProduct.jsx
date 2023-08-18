import React from 'react'
import ProductCard from '../ProductCard'
import Card from './Card'

const FeaturedProduct = () => {
  return (
    <>
      <section className='h-full w-full my-10'>
        <div className='w-[100%] max-w-[1200px] mx-auto'>
          <h3 className='font-bold text-[1.4rem] mb-4'>Featured Product</h3>

          <div className='grid grid-cols-3 gap-5'>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedProduct
