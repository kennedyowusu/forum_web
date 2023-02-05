import React from 'react'
import { Icon } from '@iconify/react'

const RightSection = () => {
  return (
    <div className='flex space-x-4'>
      <Icon icon='material-symbols:home-outline-rounded' className='w-9 h-9' />
      <Icon icon='material-symbols:home-outline-rounded' className='w-9 h-9' />
      <Icon icon='material-symbols:home-outline-rounded' className='w-9 h-9' />
      <Icon icon='material-symbols:home-outline-rounded' className='w-9 h-9' />
      <Icon icon='ant-design:logout-outlined' className='w-9 h-9' />
    </div>
  )
}

export default RightSection
