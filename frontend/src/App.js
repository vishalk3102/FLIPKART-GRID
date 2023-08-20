import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './Components/ProductList'
import ProductLanding from './Components/ProductLanding'
import Login from './Components/User/Login'
import Navbar from './Components/Layout/Navbar'
import Register from './Components/User/Register'
import Home from './Components/Home/Home'
import Products from './Components/Product/Products'
import ProductDetails from './Components/Product/ProductDetails'
import { useSelector } from 'react-redux'
import Test from './Components/test'
import toast, { Toaster } from 'react-hot-toast'
import FeaturedProduct from './Components/Product/FeaturedProduct'

const App = () => {
  const { loading, user, isAuthenticated } = useSelector(state => state.user)
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />

        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/:keyword' element={<Products />} />
        <Route exact path='/product/:id' element={<ProductDetails />} />

        {/* <Route exact path='/recommend' element={<Test />} />
        <Route exact path='/recommend/products' element={<FeaturedProduct />} /> */}

        {/* <Route exact path='/product/:keyword' element={<ProductList />} /> */}
      </Routes>
      <Toaster />
    </>
  )
}

export default App
