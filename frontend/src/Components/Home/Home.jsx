import React from 'react'
import Products from './Products'
import Slider from './Slider'

const Home = () => {
  return (
    <>
      <section className='bg-gray-50'>
        <Slider />
        <Products />
      </section>
    </>
  )
}

export default Home
