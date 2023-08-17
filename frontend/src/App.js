import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact to='/' element={<ProductList />} />
        <Route exact to='/products' element={<ProductList />} />
      </Routes>
    </>
  )
}

export default App
