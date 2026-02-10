import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Layout/Footer/Footer'
import Navbar from '../../Components/Layout/Navbar/Navbar'

export default function AuthLayout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
