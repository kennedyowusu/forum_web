import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'
    >
      <Post />
    </div>
  )
}

export default Posts
