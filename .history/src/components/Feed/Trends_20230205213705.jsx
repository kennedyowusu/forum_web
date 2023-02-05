import React from 'react'
import { trends } from '../../utils/trends'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const Trends = () => {
  return (
    <div className=''>
    {trends.map((trend) => {
      const { id, title, body, path, icon } = trend
      return (
       <div key={id} className='flex flex-col space-y-2 
       border-b border-gray-300 py-2 w-[10rem] h-30
        '>
          <Link
            to={path}
            className='flex items-center p-2 space-x-2 rounded-md hover:bg-gray-200 pt-4'
          >
            <Icon icon={icon} className='text-2xl' />
            <h4 className=''>{title}</h4>
            <p className='text-xs text-gray-500'>{body}</p>
          </Link>
        </div>
      )
    })}
    </div>
  )
}

export default Trends
