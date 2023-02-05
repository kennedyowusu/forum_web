import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/forum.png'

const LeftSection = () => {
  return (
    <div className='flex items-center'>
      <div className='w-10 h-10'>
        <Link to='/'>
          <img src={image} alt='Logo' />
        </Link>
      </div>
      <div className='ml-2'>
        <input
          type='text'
          placeholder='Search...'
          className=' outline-0 bg-[#f2f3f7] p-1.5 pl-4 rounded-full'
        />
      </div>
    </div>
  )
}

export default LeftSection
