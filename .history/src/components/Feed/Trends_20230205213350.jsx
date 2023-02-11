import React from 'react'
import { trends } from '../../utils/trends'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const Trends = () => {
  return (
    <div className='flex'>
    {trends.map((trend) => {
      const { id, title, body, path, icon } = trend
      return (
        <div key={id} className='flex flex-col space-y-2'>
          <Link to={path} className='flex items-center p-2 space-x-2 rounded-md hover:bg-gray-200 pt-4'>
            <Icon icon={icon} className='text-2xl' />
            <p className=''>{title}</p>
          </Link>
          <p className='text-xs text-gray-500'>{body}</p>
        </div>
      )
    })}
    </div>
  )
}

export default Trends
