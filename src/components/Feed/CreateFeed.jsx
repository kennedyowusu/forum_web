import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, selectCreatePostState } from '../../redux/slices/post/createPostSlice'
import { Icon } from '@iconify/react'
import { toast } from 'react-toastify'
import handleInputError from '../../utils/handleInputError'
import { readPosts } from '../../redux/slices/post/readPostSlice'
import colors from '../../utils/colors'

const CreateFeed = ({color}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const {
    loading,
    success,
    post,
    errorMessage,
    errorDetails,
  } = useSelector(selectCreatePostState) || {}

  useEffect(() => {
    if (success) {
      toast.success('Post created successfully')
      dispatch(readPosts())
    } else if (errorMessage) {
      toast.error(errorMessage)
    }
  }, [success, errorMessage])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const error = handleInputError(title, description)
    if (error) {
      setError(error)
      return
    }

    console.log('Dispatching action:', createPost(title, description))
    dispatch(
      createPost({
        title,
        description,
      })
    )

    setTitle('')
    setDescription('')
  }

  return (
    <div className='flex mx-2 px-4 py-3 sm:px-4 md:px-4 -my-2'>
      <div className='w-screen sm:w-full flex justify-center items'>
        <div
          className='sm:max-w-[25rem] md:max-w-[40rem] lg:w-full my-8 bg-white flex flex-col w-full p-3 rounded-md
    shadow-md border border-[#f2f3f7]
      '
        >
          <form
            onSubmit={handleSubmit}
            className='
            w-full rounded-lg p-2 flex flex-col
            '
          >
            <h2 className='text-lg mb-4'>Create a New Feed</h2>
            <div className='mb-4'>
              <label
                htmlFor='title'
                className='block text-gray-700 font-medium mb-2'
              >
                Title
              </label>
              <input
                id='title'
                type='text'
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                  setError('')
                }}
                placeholder='Enter title...'
                className='w-full border border-gray-400 p-2 rounded-lg'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-gray-700 font-medium mb-2'
              >
                Description
              </label>
              <textarea
                id='description'
                rows='4'
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value)
                  setError('')
                }}
                placeholder='Enter description...'
                className='w-full border border-gray-400 p-2 rounded-lg'
              />
            </div>
            {error && <div className='mb-4 text-red-500 text-sm'>{error}</div>}
            <button
              disabled={loading}
              type='submit'
              // className={`bg-${colors.primaryColor}-500 text-${colors.white} py-2 px-4 rounded-lg hover:bg-${colors.primaryColor}-600`}
              className="bg-[#1E319D] text-white py-2 px-4 rounded-lg"
            >
              <div className='flex items-center justify-center'>
                {loading ? (
                  <>
                    <Icon icon='mdi:loading' className='animate-spin' />
                    <span className='ml-2'>Loading...</span>
                  </>
                ) : (
                  'Create Post'
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateFeed
