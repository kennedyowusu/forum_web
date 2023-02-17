import React from 'react'
import Logo from '../../assets/forum.png'

const Post = () => {
  return (
    <div className='rounded-md px-1'>
      {/* Post Header */}
      <div className='flex items-center'>
        <div className=''>
          <img className='rounded-full h-12 w-12' src={Logo} alt='Profile' />
        </div>
        <div className='ml-3'>
          <p className='font-bold '>Kennedy</p>
          <p className='text-gray-500 text-sm '>2 hours ago</p>
        </div>
      </div>
      {/* Post Title */}
      <div className='mt-3'>
        <p className='font-bold text-lg '>Lorem ipsum dolor sit amet.</p>
      </div>

      {/* Post Body */}
      <div className='mt-3'>
        <p className='text-gray-500 text-sm '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quod.
         </p>
      </div>

      {/* Post Footer */}
    <div className='mt-3'>
      {/*  */}

      </div>
    </div>
  )
}

export default Post
