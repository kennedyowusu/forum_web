import React from 'react'
import LeftSection from './LeftSection'
import MiddleSection from './MiddleSection'
import RightSection from './RightSection'

const MainContainer = () => {
  return (
    <div className='p-4 flex items-center justify-between border-b'>
      {/* Left Side */}
      <LeftSection />

      {/* Middle Side */}
      <MiddleSection />

      {/* Right Side */}
      <RightSection />
    </div>
  )
}

export default MainContainer
