import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/forum.png'

const LeftSection = () => {
  return (
    <div className='flex items-center'>
      <div className='w-12 h-14'>
        <Link to='/'>
          <img src={image} alt='Logo' />
        </Link>
      </div>
      <div className='ml-2'>
        <input
          type='text'
          placeholder='Search...'
          className=' outline-0 bg-[#f2f3f7] p-1.5 pl-4 rounded-full hidden sm:block w-80 mr-4'
        />
      </div>
    </div>
  )
}

export default LeftSection
