import React from 'react'
import CreateFeed from './CreateFeed'
import LeftSide from './LeftSide'
import Post from './Post'

const Feed = () => {
  return (
    <div className='flex h-screen sm:w-full fle'>
      {/* Left Side Feed */}
      <LeftSide />
      <div className='mx-auto'>
        {/* <Trends /> */}
        <CreateFeed />
      </div>

      {/* Stories */}

      {/* Create Post */}

      <Post />
      {/* Right Side Feed */}
    </div>
  )
}

export default Feed
