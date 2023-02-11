import React from 'react'
import kennedy from '../../assets/kennedy.jpeg'

const CreateFeed = () => {
  return (
    <div>
      <div className='my-8 bg-white flex w-full'>
        {/* <div className='w-11 h-11 rounded-full'>
          <img src={kennedy} alt='person' className='rounded-full' />
        </div> */}
        <div className='bg-[#ffffff] flex items-center mx-5 w-full h-16'>
          <input
            type='text'
            placeholder="Enter Title..."
            className='outline-0 bg-[#f2f3f7] w-[40rem] pl-3 h-12  rounded-full p-1'
          />
        </div>
      </div>
    </div>
  )
}

export default CreateFeed
