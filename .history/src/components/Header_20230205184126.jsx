import React from 'react'


const Header = () => {
  return (
    <div className='p-4'>
      {/* Left Side */}
      <div className='flex items-center'>
        <div className='w-10 h-10'>
          <Link to='/'>
            <img src={image} alt='Logo' />
          </Link>
        </div>
        <div className='ml-2'>
          <input type='text' placeholder='Search...' className=' outline-0 bg-[#f2f3f7] p-1.5 pl-4 rounded-full' />
        </div>
      </div>

      {/* Middle Side */}
      <div>

      </div>

      {/* Right Side */}
    </div>
  )
}

export default Header
