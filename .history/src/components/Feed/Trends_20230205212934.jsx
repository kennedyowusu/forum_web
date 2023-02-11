import React from 'react'
import { trends } from '../../utils/trends'
import { Link } from 'react-router-dom'
/navLinkItems
import { Icon } from '@iconify/react'

const Trends = () => {
  return (
    <div className='flex'>
    <h1>hello</h1>
    {
     trends.map((trend) => (
      <Link to={trend.path} key={trend.id}>
       <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-full cursor-pointer'>
        <Icon icon={trend.icon} />
        <p>{trend.title}</p>
       </div>
      </Link>
     ))
    }
    </div>
  )
}

export default Trends
