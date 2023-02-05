import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const RightSection = () => {
  return (
    <div className='flex space-x-7'>
      <Icon icon='ic:baseline-notifications-none' className='w-9 h-9' />
    <Link to='/profile'>
     <Icon icon='ant-design:user-outlined' className='w-9 h-9

     ' />
    </Link>
      <Icon icon='ant-design:logout-outlined' className='w-9 h-9' />
    </div>
  )
}

export default RightSection
