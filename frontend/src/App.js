import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route exact to='/products' element={<ProductList />} /> */}
        <Route exact path='/' element={<ProductList />} />
        {/* <Route exact path='/about' element={<ProductList />} /> */}
      </Routes>
    </>
  )
}

export default App
