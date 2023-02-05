import React from 'react'
import LeftSection from './LeftSection'
import MiddleSection from './MiddleSection'
import 

const MainContainer = () => {
  return (
    <div className='p-4 flex items-center justify-between '>
      {/* Left Side */}
      <LeftSection />

      {/* Middle Side */}
      <MiddleSection />

      {/* Right Side */}
    </div>
  )
}

export default MainContainer
