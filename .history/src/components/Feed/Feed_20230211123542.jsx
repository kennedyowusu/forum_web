import React from 'react'
import CreateFeed from './CreateFeed'
import LeftSide from './LeftSide'
import Posts from '../Posts/Posts'

const Feed = () => {
  return (
    <div className='flex h-screen sm:w-full'>
      {/* Left Side Feed */}
      <LeftSide />
      <div className='mx-auto'>
        {/* <Trends /> */}
        <CreateFeed />
        <Posts />
      </div>

      {/* Stories */}

      {/* Create Post */}

      {/* Right Side Feed */}
    </div>
  )
}

export default Feed
