import React from "react";
import Sidebar from '../components/Sidebar/'

const Home = () => {
  return (
    <div>
      <div className='flex flex-col h-[100vh] items-center justify-center space-y-5'>
        <h1 className=' text-3xl font-bold underline'>Hello world!</h1>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          onClick={() => {
            localStorage.removeItem('token')
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
};

export default Home;
