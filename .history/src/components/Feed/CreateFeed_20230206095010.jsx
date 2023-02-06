import React from 'react'
import kennedy from '../../assets/kennedy.jpeg'

const CreateFeed = () => {
  return (
    <div className='w-screen'>
      <div className='my-8 bg-white flex'>
        <div className='w-11 h-11'>
          <img src={kennedy} alt='person' className='rounded-full' />
        </div>
        <div className=''>
          <input
            type='text'
            placeholder="what's on your mind today?"
            className='outline-0 bg-[#f2f3f7] '
          />
        </div>
      </div>
    </div>
  )
}

export default CreateFeed
