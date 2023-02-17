import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/forum.png'

const Header = () => {
  return (
    <div className='p-3'>
      {/* Left Side */}
      <div className='flex'>
        <div className='w-10 h-10'>
          <Link to='/'>
            <img src={image} alt="Logo" />
            </Link>
        </div>
        <input type="text" placeholder='Search...' className='ml-2 outline-0'/>
      </div>

      {/* Middle Side */}

      {/* Right Side */}
    </div>
  )
}

export default Header
