import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from './../pages/Home'

import Tours from './../pages/Tours'

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours/>} />
      </Routes>
   )
}

export default Routers