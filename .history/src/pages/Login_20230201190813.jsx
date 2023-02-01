import loginImg from '../assets/login.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

   const handleSubmit = async (e) => {
     e.preventDefault()

     // Dispatch the registerUser async thunk
     try {
       const response = await dispatch(registerUser({ name, email, password }))
       console.log('Registered successfully', response)
     } catch (error) {
       console.log('Error while registering', error)
     }
   }


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt='' />
      </div>

      <div className='bg-gray-800 flex flex-col justify-center'>
        <form
          className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'
          onSubmit={handleSubmit}
        >
          <h2 className='text-2xl text-white font-bold text-center'>Sign In</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Username</label>
            <input
              className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='text'
              placeholder='kennedy'
            />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input
              className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='password'
              placeholder='**********'
            />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex items-center'>
              <input className='mr-2' type='checkbox' /> Remember Me
            </p>
            <p className=''>
              <Link to='/forgot-password'>Forget Password?</Link>
            </p>
          </div>
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
            Sign In
          </button>
          <p className='text-center text-gray-400'>
            Don't have an account?{' '}
            <span className='text-teal-500 cursor-pointer'>
              <Link to='/register'>Sign Up</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
