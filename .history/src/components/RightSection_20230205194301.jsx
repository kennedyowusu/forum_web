import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const RightSection = () => {
  return (
    <div className='flex space-x-7 items-center'>
      <div className='md:flex space-x-7 hidden ml-4 pr-4'>
        <Icon icon='ic:baseline-notifications-none' className='w-9 h-9' />

        <Icon icon='ant-design:logout-outlined' className='w-9 h-9' />
      </div>
      <Link to='/profile'>
        <Icon
          icon='ant-design:user-outlined'
          className='w-9 h-9
        border-2 border-gray-300 rounded-full p-1 hover:bg-gray-200 transition duration-300 ease-in-out
       '
        />
      </Link>
    </div>
  )
}

export default RightSection
