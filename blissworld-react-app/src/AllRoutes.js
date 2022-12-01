import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import { ProductList } from './Components/ProductPage/ProductList/ProductList'

export const AllRoutes = () => {
    let endPoint = "bestSeller";
  return (

    <div>
        <Routes>
            <Route path="/" element={<LandingPage />} /> 
            <Route path="/bestSeller" element={<ProductList endPoint={endPoint}/>} /> 

        </Routes>
    </div>
  )
}
