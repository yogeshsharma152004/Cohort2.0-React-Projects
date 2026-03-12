import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'

const App = () => {

  

  return (

    <div>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/products' element={<Products/>}/>
        <Route  path='/products/:productId' element={<ProductDetail/>}/>
      </Routes>
    </div>
    
  )
}

export default App

