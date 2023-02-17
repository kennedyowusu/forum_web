import React from 'react'
import CreateFeed from './CreateFeed'
import LeftSide from './LeftSide'
import Trends from './Trends'

const Feed = () => {
  return (
    <div className='flex flex-col bg-[#f2f3f7]'>
      {/* Left Side Feed */}
      <LeftSide />
      <div className=''>
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
