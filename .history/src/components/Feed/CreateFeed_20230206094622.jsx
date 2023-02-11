import React from 'react'
import kennedy from '../../assets/kennedy.jpeg'

const CreateFeed = () => {
  return (
    <div className=''>
      <div className='my-8 bg-white '>
        <div className='w-11 h-11'>
          <img src={kennedy} alt='person' className='rounded-full' />
     </div>
     <input type="text" placeholder="what's on your mind today?" className='outline-9'/>
      </div>
    </div>
  )
}

export default CreateFeed
