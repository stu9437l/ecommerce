import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../components/home';
import Cart from '../components/cart';
import Navigation from '../common/navigation';
const MainRoute = () => {
  return (
      <BrowserRouter>
      <Navigation/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
  )
}

export default MainRoute
