import React from 'react'
import Logo from '../../assets/forum.png'

const Post = () => {
  return (
    <div className='rounded-md px-1'>
      {/* Post Header */}
      <div>
        <img className='rounded-full h-12 w-12' src={Logo} alt='Profile' />
      </div>
      {/* Post Content */}
      {/* Post Footer */}
    </div>
  )
}

export default Post
