import React from 'react'
import LeftSection from './LeftSection'
import MiddleSection from './MiddleSection'

const MainContainer = () => {
  return (
    <div className='p-4 flex item'>
      {/* Left Side */}
      <LeftSection />

      {/* Middle Side */}
      <MiddleSection />

      {/* Right Side */}
    </div>
  )
}

export default MainContainer
