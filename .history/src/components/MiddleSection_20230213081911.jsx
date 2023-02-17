import React from 'react'
import { Icon } from '@iconify/react'

const MiddleSection = () => {
  return (
    <div className='flex items-center space-x-7'>
      {/* <Icon icon='material-symbols:home-outline-rounded' className='w-9 h-9' />
      <Icon icon='material-symbols:home-outline-rounded' className='w-9 h-9' />
      <Icon icon='material-symbols:home-outline-rounded' className='w-9 h-9' />
      <Icon icon='material-symbols:home-outline-rounded' className='w-9 h-9' />
      <Icon icon='material-symbols:home-outline-rounded' className='w-9 h-9' /> */}
      <p
        className='text-teal-500 text-lg font- cursor-pointer hover:text-gray-500
        hover:underline hover:font-semibold hover:transition-all hover:duration-300
      '
      >
        Evolve
      </p>
    </div>
  )
}

export default MiddleSection
