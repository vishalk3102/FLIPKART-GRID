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

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/:keyword' element={<ProductList />} />
        <Route exact path='/products' element={<Products />} />
        {/* <Route exact path='/product/:id' element={<ProductLanding />} /> */}
        <Route exact path='/product/:id' element={<ProductDetails />} />
        <Route exact path='/product/:keyword' element={<ProductList />} />
      </Routes>
    </>
  )
}

export default App
