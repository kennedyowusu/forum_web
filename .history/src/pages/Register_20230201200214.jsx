import loginImg from '../assets/login.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, selectRegisterUser } from '../'
import { toast } from 'react-toastify'

const Register = () => {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const dispatch = useDispatch()
  const registration = useSelector(selectRegisterUser);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name) {
      setError('Name is required')
      return
    }

    if (!username) {
      setError('Username is required')
      return
    }

    if (!email) {
      setError('Email Address is required')
      return
    }

    if (!password) {
      setError('Password is required')
      return
    }

    // Dispatch the registerUser async thunk
    dispatch(registerUser({ name, username, email, password }));
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
          <h2 className='text-2xl text-white font-bold text-center'>Sign Up</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Full Name</label>
            <input
              className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='text'
              placeholder='Kennedy Owusu'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Username</label>
            <input
              className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='text'
              placeholder='Kennedy'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Email Address</label>
            <input
              className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='email'
              placeholder='kennediowusu@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input
              className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='password'
              placeholder='**********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className='text-red-500 text-sm font-semibold py-2'>
              {error}
            </div>
          )}
          <button type="submit" className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
            Sign Up
          </button>
          <p className='text-center text-gray-400'>
            Already have an account?{' '}
            <span className='text-teal-500 cursor-pointer'>
              <Link to='/login'>Sign In</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register