import React from 'react'
import CreateFeed from './CreateFeed'
import LeftSide from './LeftSide'
import Trends from './Trends'

const Feed = () => {
  return (
    <div className='flex flex-col bg-[#f2f3f7]'>
      {/* Left Side Feed */}
      <LeftSide />
      <div className='flex'>
        <CreateFeed />
      </div>

      {/* Stories */}
      {/* <Trends /> */}
      {/* Create Post */}

      {/* Posts */}
      {/* Right Side Feed */}
    </div>
  )
}

export default Feed
