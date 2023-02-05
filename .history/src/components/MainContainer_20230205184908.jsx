import React from 'react'
import LeftSection from './LeftSection'

const MainContainer = () => {
  return (
    <div className='p-4'>
      {/* Left Side */}
      <LeftSection />

      {/* Middle Side */}
      <MiddleSection />

      {/* Right Side */}
    </div>
  )
}

export default MainContainer
