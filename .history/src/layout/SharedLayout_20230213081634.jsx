import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
  <div>
    <main>
      <Outlet />
    </main>
  </div>
  )
}

export default SharedLayout