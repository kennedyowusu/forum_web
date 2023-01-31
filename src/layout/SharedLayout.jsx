import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const SharedLayout = () => {
  return (
   <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
    </div>
  )
}

export default SharedLayout