import React from 'react'

const Loader = () => {
  return (
    <>
      <section id='Loader' className='w-full h-full'>
        <div className='w-[100%] h-[100%] max-w-[1200px] mx-auto py-40'>
          <div className='w-[100%] h-[100%] flex justify-center items-center'>
            <div className='h-[250px] w-[250px]  border-solid border-t-[10px]  border-b-[10px] border-[#fedb28] rounded-[50%] animate-spin'></div>
            <h1 className='text-[2rem] md:text-[3rem] flex justify-center items-center font-extrabold bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] text-transparent bg-clip-text absolute'>
              Flippy
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Loader
