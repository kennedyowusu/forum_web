import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const RightSection = () => {
  return (
    <div className='flex space-x-7 items-center'>
      <Icon icon='ic:baseline-notifications-none' className='w-9 h-9' />
   
      <Icon icon='ant-design:logout-outlined' className='w-9 h-9' />
    </div>
  )
}

export default RightSection
