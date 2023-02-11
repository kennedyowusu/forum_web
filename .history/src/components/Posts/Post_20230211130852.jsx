import React from 'react'
import Logo from '../../assets/forum.png'

const Post = () => {
  return (
    <div className='rounded-md px-1'>
      {/* Post Header */}
      <div>
        <div className='h-12 w-12'>
          <img className='rounded-full ' src={Logo} alt='Profile' />
        </div>
        <p>Kennedy</p>
      </div>
      {/* Post Content */}
      {/* Post Footer */}
    </div>
  )
}

export default Post
