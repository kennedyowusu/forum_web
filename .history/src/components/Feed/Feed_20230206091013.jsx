import React from 'react'
import CreateFeed from './CreateFeed'
import LeftSide from './LeftSide'
import Trends from './Trends'

const Feed = () => {
  return (
    <div className='flex flex-col h-screen bg-[#f2f3f7]'>
      {/* Left Side Feed */}
      <LeftSide />
    
      {/* Stories */}
      {/* <Trends /> */}
      {/* Create Post */}
      <CreateFeed />
    {/* Posts */}
    {/* Right Side Feed */}
    </div>
  )
}

export default Feed
