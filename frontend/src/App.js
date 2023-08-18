import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import ProductLanding from './Components/ProductLanding'
import Login from './Components/User/Login'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ProductList />} />
        <Route exact path='/:keyword' element={<ProductList />} />
        <Route exact path='/product/:id' element={<ProductLanding />} />
        <Route exact path='/product/:keyword' element={<ProductList />} />
        {/* <Route exact path='/about' element={<ProductList />} /> */}
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
