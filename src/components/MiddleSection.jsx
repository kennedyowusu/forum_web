import React from 'react'
import { Link } from 'react-router-dom'

const MiddleSection = () => {
  return (
    <div className='flex items-center'>
      <p
        className='text-[#1E319D] text-lg font-bold cursor-pointer hover:text-gray-500
        hover:font-semibold hover:transition-all hover:duration-300
      '
      >
        <Link to='/'>
          <span className='text-center font-extrabold text-2xl'>Evolve</span>
        </Link>
      </p>
    </div>
  )
}

export default MiddleSection
