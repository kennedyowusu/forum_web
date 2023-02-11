import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div
      className='flex ml-7 px-4 py-3 sm:px-4 md:px-4 -my-2
    '
    >
      <div
        className='mx-0 sm:max-w-[25rem] md:max-w-[40rem] lg:w-full bg-white flex flex-col w-full p-3 rounded-md
    shadow-md border border-[#f2f3f7]'
      >
        <Post />

        <Post />
      </div>
    </div>
  )
}

export default Posts
