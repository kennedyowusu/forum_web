import React from "react";
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <>
      <div className='flex flex-col h-[100vh] items-center'>
        {/* <h1 className=' text-3xl font-bold underline'>Hello world!</h1>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          onClick={() => {
            localStorage.removeItem('token')
          }}
        >
          Logout
        </button> */}

        {/* place two responsive input fields here and give it a direction of column */}
        <div className='flex flex-col space-y-5'>
          <div className='flex flex-col space-y-2 w-50'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder="Enter Title"
              className='border border-gray-300 rounded-md p-2'
            />
          </div>
          {/* <div className='flex flex-col space-y-2'>
            <input
              type='password'
              name='password'
              id='password'
              placeholder="Enter Description"
              className='border border-gray-300 rounded-md p-2'
            />
          </div> */}
          </div>
      </div>
    </>
  )
};

export default Home;
