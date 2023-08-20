import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, login, register } from '../../redux/actions/userAction'
import { NavLink, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const dispatch = useDispatch()
  const { error, loading, isAuthenticated } = useSelector(state => state.user)
  const navigate = useNavigate()
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { email, password } = user

  const loginSubmit = e => {
    e.preventDefault()
    console.log(loginEmail)
    console.log(loginPassword)
    dispatch(login(loginEmail, loginPassword))
  }
  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }

    if (isAuthenticated) {
      navigate('/')
    }
  }, [dispatch, error, isAuthenticated, navigate])

  return (
    <>
      <section class='bg-gray-100 '>
        <div class='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <div class='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Sign in to your account
              </h1>
              <form class='space-y-4 md:space-y-6' onSubmit={loginSubmit}>
                <div>
                  <label
                    for='email'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required=''
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    for='password'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                  />
                </div>
                <button
                  type='submit'
                  class='w-full text-[#000] bg-[#feb21a] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Sign in
                </button>
                <p class='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Don’t have an account yet?{' '}
                  <NavLink
                    to='/register'
                    class='font-medium text-[#feb21a] hover:underline '
                  >
                    Sign up
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

export default Login
