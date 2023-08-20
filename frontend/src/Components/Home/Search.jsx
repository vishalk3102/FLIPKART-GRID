import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    console.log(keyword)
    if (keyword.trim()) {
      navigate(`/products`)
    } else {
      navigate(`/products/${keyword}`)
    }
  }
  return (
    <>
      <div className='max-w-[1200px] w-[100%] absolute top-[30%] z-10 mx-auto'>
        <h3 className='text-[#feb21a] text-[1.8rem] md:text-[2.2rem] font-semibold text-center capitalize p-4 mb-5'>
          All you need is here !
        </h3>
        <div className='w-[600px] flex justify-center items-center mx-auto'>
          <input
            type='text'
            className=' w-[80%] text-black md:w-[100%] h-[3rem] border-solid  border-2 rounded-[3rem] outline-none pl-5'
            onChange={e => setKeyword(e.target.value)}
          />
          <span
            className='p-1  relative right-10 hover:cursor-pointer'
            onClick={e => submitHandler(e)}
          >
            <BsSearch size={24} className='text-[#000]' />
          </span>
        </div>
      </div>
    </>
  )
}

export default Search
