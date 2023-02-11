import React from 'react'
import kennedy from '../../assets/kennedy.jpeg'

const CreateFeed = () => {
  return (
    <div
      className='align-middle bg-[#f2f3f7] h-screen w-full flex justify-center items-center'
    >
      <div className='w-screen sm:w-full flex justify-center items'>
        <div
          className='sm:max-w-[25rem] md:max-w-[40rem] lg:w-full my-8 bg-white flex flex-col w-full p-3 rounded-md
    shadow-md border border-[#f2f3f7]
      '
        >
          <div className='flex items-center mx-5 h-16 mt-2'>
            <input
              type='text'
              placeholder='Enter Title...'
              className='outline-0 bg-[#f2f3f7] w-[36rem] pl-3 h-12  rounded-md p-1'
            />
          </div>

          <div className='flex items-center mx-5 h-24 rounded-md'>
            <textarea
              placeholder='Enter Description...'
              rows='4'
              cols='60'
              className='outline-0 bg-[#f2f3f7] pl-3 h-20  rounded-md p-1'
            />
          </div>
          <div className='text-right mr-5 mt-2'>
            <button
              type='submit'
              className='bg-[#f2f3f7] w-28 h-10 rounded-md
      text-[#1da1f2] font-bold hover:bg-[#1da1f2] hover:text-white
          '
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateFeed
