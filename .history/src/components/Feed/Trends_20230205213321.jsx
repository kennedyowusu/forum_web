import React from 'react'
import { trends } from '../../utils/trends'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const Trends = () => {
  return (
    <div className='flex'>
    {trends.map((trend) => (
       const { id, title, path, icon } = trend
        <Link to={path} key={id}>
          <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-full cursor-pointer'>
            <Icon icon={icon} />
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Trends
