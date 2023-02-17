import React from 'react'
import { trends } from '../../utils/trends'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const Trends = () => {
  return (
    <div className='flex space-x-2 p-4'>
    {trends.map((trend) => {
      const { id, title, body, path, icon } = trend
      return (
        <div
          key={id}
          className='flex flex-col space-y-2 
          py-2
        '
        >
          <Link
            to={path}
            className='flex flex-col justify-start items-center hover:bg-gray-200 pt-4 object-cover w-[] h-32 sm:w-[10rem] sm:h-40 space-y-4 rounded-[1rem]'
          >
            <Icon icon={icon} className='text-2xl' />
            <h4 className=''>{title}</h4>
            <p className='text-sm text-gray-500'>{body}</p>
          </Link>
        </div>
      )
    })}
    </div>
  )
}

export default Trends
