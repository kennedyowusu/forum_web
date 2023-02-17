import React from 'react'
import { trends } from '../../utils/trends'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const Trends = () => {
  return (
    <div className='flex'>
    {trends.map((trend) => (
       const 
        <Link to={trend.path} key={trend.id}>
          <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-full cursor-pointer'>
            <Icon icon={trend.icon} />
            <h3>{trend.title}</h3>
            <p>{trend.body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Trends
