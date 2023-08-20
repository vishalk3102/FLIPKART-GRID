import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'

const Navbar = ({ isAuthenticated = false }) => {
  // const isAuthenticated = false

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
      <section
        id='Navbar'
        className='h-20 w-[100%] flex  mx-aut z-10 absolute top-0'
      >
        {/* *****************DESKTOP NAVBAR CODE *************** */}
        <div className='flex  md:flex w-[100%]  max-w-[1200px] justify-between  items-center mx-auto'>
          <div className='text-[1.8rem] font-bold   p-2  m-2'>
            <Link to='/' className='hover:cursor-pointer'>
              <h5 className='bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] text-transparent bg-clip-text'>
                Flippy
              </h5>
            </Link>
          </div>
          {/*   <div className='w-[600px] flex justify-center items-center'>
            <input
              type='text'
              className=' w-[80%] text-black md:w-[100%] h-[2.5rem] border-solid border-black border-2 rounded-[3rem] outline-none pl-5'
              onChange={e => setKeyword(e.target.value)}
            />
            <span
              className='p-1  relative right-10 hover:cursor-pointer'
              onClick={e => submitHandler(e)}
            >
              <BsSearch size={24} className='text-[#000]' />
            </span>
          </div> */}

          <div className='text-[1rem] font-medium  capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
            <ul className='flex justify-evenly'>
              <li className='text-[1rem] font-medium  capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer hover:scale-105 text-[#feb21a]'>
                <Link to='/products'>Products</Link>
              </li>
              <li className='text-[1rem] font-medium capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer hover:scale-105 text-[#feb21a]'>
                <Link to='/about'>About</Link>
              </li>
            </ul>
            <Link to='/cart' className='flex items-center m-2 p-2'>
              <AiOutlineShoppingCart size={28} className='text-[#feb21a]' />
            </Link>
            <Link
              to={isAuthenticated ? '/me' : '/login'}
              className='flex items-center m-2 p-2'
            >
              {isAuthenticated ? (
                <FaUser size={28} className='text-[#feb21a]' />
              ) : (
                <FiLogIn size={28} className='text-[#feb21a]' />
              )}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
