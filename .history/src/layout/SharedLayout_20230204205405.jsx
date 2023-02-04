import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sid'

const SharedLayout = () => {
  return (
   <div>
    <Sidebar />
    <main>
      <Outlet />
    </main>
    </div>
  )
}

export default SharedLayout