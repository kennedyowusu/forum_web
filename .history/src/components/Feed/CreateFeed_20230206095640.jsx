import React from 'react'
import kennedy from '../../assets/kennedy.jpeg'

const CreateFeed = () => {
  return (
    <div>
      <div className='my-8 bg-white flex'>
        <div className='w-11 h-11'>
          <img src={kennedy} alt='person' className='rounded-full' />
        </div>
        <div className='bg-[#ffffff] flex items-center ml-5 w-full'>
          <input
            type='text'
            placeholder="what's on your mind today?" pl-3 rounded-full p-1'
          />
        </div>
      </div>
    </div>
  )
}

export default CreateFeed
