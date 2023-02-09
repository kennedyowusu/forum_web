import loginImg from '../assets/login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, selectLoginState } from '../redux/authentication/loginSlice'
import { toast } from 'react-toastify'
import { Icon } from '@iconify/react'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  const checkEmptyFields = () => {
    if (!username || !password) {
      return true
    }
    return false
  };

  const { loading, success, user, errorMessage, errorStrings } = useSelector(selectLoginState)

  useEffect(() => {
    if (token) {
      navigate('/')
    }
    if (success) {
      toast.success(`Welcome ${user.name}`)
    }
    if (errorMessage) {
      toast.error(errorMessage)
    }
  }, [errorMessage, navigate, success, token, user, user.name])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');
    if (checkEmptyFields()) {
      setError('All fields are required')
      return;
    }
    dispatch(loginUser({ username, password }))
  };

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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input
              className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='password'
              placeholder='**********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          {error && (
            <div className='text-red-500 text-sm font-semibold py-2'>
              {error}
            </div>
          )}
          {errorStrings && (
            <div className='text-red-500 text-sm font-semibold py-2'>
              {errorStrings.map((error) => (
                <div key={error} className='flex items-center'>
                  <Icon icon='mdi:alert-circle' className='mr-2' />
                  {error}
                </div>
              ))}
            </div>
          )}
          <button
            className={`${
                checkEmptyFields() ? "bg-gray-500 cursor-not-allowed" : "bg-teal-500"
            }`}
            type='submit'
            disabled={loading}
          >
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
