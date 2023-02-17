import React from 'react'

const Profile = () => {
  return (
   <div
      className='flex flex-col h-[100vh] items-center justify-center space-y-5'
   >
    <h1 className=' text-3xl font-bold underline'>Hello world!</h1>
    <button
     className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
     onClick={() => {
      localStorage.removeItem('token')
     }}
    </div>
  )
}

export default Profile
