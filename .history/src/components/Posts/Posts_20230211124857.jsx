import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div
      // className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'
      className='mx-4 sm:max-w-[25rem] md:max-w-[40rem] lg:w-full my-8 bg-white flex flex-col w-full p-3 rounded-md
    shadow-md border border-[#f2f3f7]'
    >
      <Post />
    </div>
  )
}

export default Posts
