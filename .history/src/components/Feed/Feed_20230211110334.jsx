import React from 'react'
import CreateFeed from './CreateFeed'
import LeftSide from './LeftSide'
import Trends from './Trends'

const Feed = () => {
  return (
    <div className='flex bg-[#f2f3f7] h-screen w-[30rem] sm:w-[30rem]'>
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
