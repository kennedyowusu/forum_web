import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='flex ml-7 px-4 py-3 sm:px-4 md:px-4 -my-2 md:w-60vw'>
      <div
        // className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'
        className='mx-0 sm:max-w-[25rem] md:max-w-[40rem] lg:w-full bg-white flex flex-col w-full p-3 rounded-md
    shadow-md border border-[#f2f3f7]'
      >
        <Post />
      </div>
    </div>
  )
}

export default Posts
