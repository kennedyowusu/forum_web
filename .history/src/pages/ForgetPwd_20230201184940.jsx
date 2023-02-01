import React from 'react'
import loginImg from '../assets/login.jpg'
import { Link } from 'react-router-dom'

const ForgetPwd = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt='' />
      </div>

      <div className='bg-gray-800 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
          <p className='text-2xl  font-bold text-center pb-5'>
            Enter your email address and we'll send you a link to reset your
          </p>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Email Address</label>
            <input
              className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='text'
              placeholder='kennedy@email.com'
            />
          </div>
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
            Submit
          </button>
          <p className='text-center text-gray-400'>
            Remember your password?{' '}
            <span className='text-teal-500 cursor-pointer'>
              <Link to='/register'>Go Back</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default ForgetPwd