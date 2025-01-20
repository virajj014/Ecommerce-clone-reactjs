import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SearchProducts from './pages/SearchProducts'
import ProductPage from './pages/ProductPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/searchproducts' element={<SearchProducts/>}/>
        <Route path='/products/:productid' element={<ProductPage/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<Cart/>}/>


      </Routes>
    </Router>
  )
}

export default App