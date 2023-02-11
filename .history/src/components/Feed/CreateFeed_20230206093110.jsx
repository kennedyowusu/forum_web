import React from 'react'
import kennedy from '../../assets/kennedy.jpeg'

const CreateFeed = () => {
  return (
    <div className=''>
      <div className='my-8'>
        <div className='flex items-center space-x-4'>
          <img src={kennedy} alt='person' className='rounded-full w-10 h-10' />
        </div>
      </div>
    </div>
  )
}

export default CreateFeed
