import React from 'react'
import kennedy from '../../assets/kennedy.jpeg'

const CreateFeed = () => {
  return (
    <div>
      <div className='my-8 bg-white flex flex-col w-full p-3 rounded-md'>
        <div className='flex items-center mx-5 w-full h-16 mt-2'>
          <input
            type='text'
            placeholder='Enter Title...'
            className='outline-0 bg-[#f2f3f7] w-[40rem] pl-3 h-12  rounded-md p-1'
          />
        </div>

        <div className='flex items-center mx-5 w-full h-24 rounded-md'>
          <textarea
            placeholder='Enter Description...'
            rows='4'
            cols='50'
            className='outline-0 bg-[#f2f3f7] w-[40rem] pl-3 h-20  rounded-md p-1'
          />
        </div>
        <div className='object-left-bottom'>
          <button type='submit' className='bg-[#f2f3f7] w-12 h-12 rounded-full ml-2'>
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateFeed
