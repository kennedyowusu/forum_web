import React, { useState } from 'react'

const CreateFeed = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!title || !description) {
      setError('All fields are required')
      return
    }

    setTitle('')
    setDescription('')

    console.log(title, description)
  }
  return (
    <div className='flex mx-2 px-4 py-3 sm:px-4 md:px-4 -my-2'>
      <div className='w-screen sm:w-full flex justify-center items'>
        <div
          className='sm:max-w-[25rem] md:max-w-[40rem] lg:w-full my-8 bg-white flex flex-col w-full p-3 rounded-md
    shadow-md border border-[#f2f3f7]
      '
        >
          {/* <div className='flex items-center mx-5 h-16 mt-2'>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
                setError('')
              }}
              type='text'
              placeholder='Enter Title...'
              className='outline-0 bg-[#f2f3f7] w-[36rem] pl-3 h-12  rounded-md p-1'
            />
          </div>

          <div className='flex items-center mx-5 h-24 rounded-md'>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
                setError('')
              }}
              placeholder='Enter Description...'
              rows='4'
              cols='60'
              className='outline-0 bg-[#f2f3f7] pl-3 h-20  rounded-md p-1'
            />
          </div>
          {error && (
            <div className='text-red-500 text-sm text-center'>
              <p>{error}</p>
            </div>
          )}
          <div className='text-right mr-5 mt-2'>
            <button
              onClick={handleSubmit}
              type='submit'
              className='bg-[#f2f3f7] w-28 h-10 rounded-md
      text-[#1da1f2] font-bold hover:bg-[#1da1f2] hover:text-white
          '
            >
              Post
            </button>
          </div> */}
          <form
            onSubmit={handleSubmit}
            className='
            w-full rounded-lg p-2
            '
          >
            <h2 className='text-lg font-medium mb-4'>Create a New Feed</h2>
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
              type='submit'
              className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateFeed
