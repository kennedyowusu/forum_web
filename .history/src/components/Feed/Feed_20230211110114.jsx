import React from 'react'
import CreateFeed from './CreateFeed'
import LeftSide from './LeftSide'
import Trends from './Trends'

const Feed = () => {
  return (
    <div className='flex bg-[#f2f3f7] h-[20rem] w-[1rem] sm:w-full'>
      {/* Left Side Feed */}
      <LeftSide />
      <div className='mx-auto'>
        {/* <Trends /> */}
        <CreateFeed />
      </div>

      {/* Stories */}

      {/* Create Post */}

      {/* Posts */}
      {/* Right Side Feed */}
    </div>
  )
}

export default Feed
