import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/images/logo.png'

const Header = () => {
  return (
    <div>
      {/* Left Side */}
      <div className=''>
        <div className='w-12 h-10'>
          <Link to='/'>
            <img src={image} alt="Logo" />
            </Link>
          </div>
      </div>

      {/* Middle Side */}

      {/* Right Side */}
    </div>
  )
}

export default Header