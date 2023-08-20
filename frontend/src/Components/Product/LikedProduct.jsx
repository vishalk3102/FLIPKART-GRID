import React from 'react'
import Card from './Card'

const LikedProduct = () => {
  return (
    <>
      <section className='h-full w-full my-10'>
        <div className='w-[100%] max-w-[1200px] mx-auto'>
          <h3 className='font-bold text-[1.4rem] '>Product You may Like</h3>

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

export default LikedProduct
