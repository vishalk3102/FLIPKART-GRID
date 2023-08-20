import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import sliderData from '../../Data/sliderData'
import Search from './Search'

const Slider = () => {
  return (
    <>
      {/* <slider /> */}
      <section id='Hero' className='w-full h-full'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          //   navigation={true}
          //   pagination={{ clickable: true }}
          speed={3000}
          loop={true}
          autoplay={{ delay: 7000 }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {sliderData.map(val => {
            return (
              <SwiperSlide key={val.id}>
                <div className='w-[100%] h-[550px]'>
                  <img
                    src={val.url}
                    alt=''
                    className='w-full h-[100%] opacity-75'
                  />
                  <div className='w-[100%] h-[100%] md:h-[100%]  bg-gray-900 opacity-20 absolute top-0'>
                    {' '}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className='max-w-[1200px] mx-auto'>
          <Search />
        </div>
      </section>
    </>
  )
}

export default Slider
