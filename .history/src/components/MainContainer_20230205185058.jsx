import React from 'react'
import LeftSection from './LeftSection'
// import MiddleSection from './MiddleSection'
import { Icon } from '@iconify/react'

const MainContainer = () => {
  return (
    <div className='p-4'>
      {/* Left Side */}
      <LeftSection />

      {/* Middle Side */}
      <div className=''>
        <Icon icon='material-symbols:home-outline-rounded' />
      </div>

      {/* Right Side */}
    </div>
  )
}

export default MainContainer
