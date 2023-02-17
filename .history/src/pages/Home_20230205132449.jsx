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
        <div className='flex flex-col space-y-5 items-center'>
          <div className='flex flex-col space-y-2 w-[50%] top-6 absolute md:right-52'>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Enter Title'
              className='border border-gray-300 rounded-md p-2'
            />
          </div>

          <div className='flex flex-col space-y-2 w-[50%] top-6 absolute md:right-52 pt-12'>
            
            <textarea
              name='description'
              id='description'
              placeholder='Enter Description'
              className='border border-gray-300 rounded-md p-2'
            />
          </div>
          {/* Button here and push it to the right */}
          <div className='flex flex-col space-y-2 w-[50%] top-6 absolute md:right-52 pt-36'>
            <button
              className='bg-teal-500 hover:bg-reteal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              Logout
            </button>
            </div>
        </div>
      </div>
    </>
  )
};

export default Home;
