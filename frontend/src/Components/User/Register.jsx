import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, login, register } from '../../redux/actions/userAction'
import { NavLink } from 'react-router-dom'

const Register = () => {
  const dispatch = useDispatch()
  const { error, loading, isAuthenticated } = useSelector(state => state.user)

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  /*  const [user, setUser] = useState({
    email: '',
    password: ''
  }) */

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = user

  const registerDataChange = e => {
    console.log(user)
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const registerSubmit = e => {
    e.preventDefault()
    const myForm = new FormData()
    myForm.set('name', name)
    myForm.set('email', email)
    myForm.set('password', password)
    dispatch(register(myForm))
  }
  // const registerSubmit = e => {
  //   e.preventDefault()
  //   console.log(email)
  //   console.log(password)
  //   dispatch(register(email, password))
  // }

  return (
    <>
      <section class='bg-gray-100 '>
        <div class='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <div class='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Create a Account
              </h1>
              <form class='space-y-4 md:space-y-6' onSubmit={registerSubmit}>
                <div>
                  <label
                    for='email'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Enter Your Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required=''
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div>
                  <label
                    for='email'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Enter Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required=''
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div>
                  <label
                    for='password'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Enter Your Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>
                <button
                  type='submit'
                  class='w-full text-[#000] bg-[#feb21a] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Register
                </button>
                <p class='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Have an account !
                  <NavLink
                    to='/login'
                    class='font-medium hover:underline  text-[#feb21a]'
                  >
                    Sign in
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register
