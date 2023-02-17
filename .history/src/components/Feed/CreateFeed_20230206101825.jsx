import React from 'react'
import kennedy from '../../assets/kennedy.jpeg'

const CreateFeed = () => {
  return (
    <div>
      <div className='my-10 bg-white flex flex-col w-full h-44'>
        {/* <div className='w-11 h-11 rounded-full'>
          <img src={kennedy} alt='person' className='rounded-full' />
        </div> */}
        <div className='bg-[#ffffff] flex items-center mx-5 w-full h-16'>
          <input
            type='text'
            placeholder='Enter Title...'
            className='outline-0 bg-[#f2f3f7] w-[40rem] pl-3 h-12  rounded-md p-1'
          />
        </div>

        <div className='bg-[#ffffff] flex items-center mx-5 w-full h-24 rounded-md'>
          <textarea
            placeholder='Enter Description...'
            rows='4'
            cols='50'
            className='outline-0 bg-[#f2f3f7] w-[40rem] pl-3 h-20  rounded-md p-1'
          />
        </div>

        {/* <div className='bg-[#ffffff] flex items-center mx-5 w-full h-24'>
          <input
            type='text'
            placeholder='Enter Title...'
            className='outline-0 bg-[#f2f3f7] w-[40rem] pl-3 h-16  rounded-full p-1'
          />
        </div> */}
      </div>
    </div>
  )
}

export default CreateFeed
