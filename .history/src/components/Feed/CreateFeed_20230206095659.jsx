import React from 'react'
import kennedy from '../../assets/kennedy.jpeg'

const CreateFeed = () => {
  return (
    <div>
      <div className='my-8 bg-white flex'>
        <div className='w-11 h-11'>
          <img src={kennedy} alt='person' className='rounded-full' />
        </div>
        <div className='bg-[#ffffff] flex items-center ml-5 w-full rounded-full'>
          <input
            type='text'
            placeholder="what's on your mind today?"
            className='outline-0 bg-[#ffffff] w-[30rem] h-11 pl-3 rounded-full p-1'
          />
        </div>
      </div>
    </div>
  )
}

export default CreateFeed
