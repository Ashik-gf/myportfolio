import React from 'react'
import Navbar from '../Components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const MainLayOut = () => {
  return (
    <div className=' max-w-6xl mx-auto'>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default MainLayOut