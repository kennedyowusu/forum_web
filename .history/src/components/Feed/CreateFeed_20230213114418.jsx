import React, { useState } from 'react';

const CreateFeed = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!title || !description) {
      setError('Title and description are required fields');
      return;
    }

    setTitle('');
    setDescription('');

    console.log(title, description);
  };

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit} className='bg-white w-full max-w-sm rounded-lg p-6'>
        <h2 className='text-lg font-medium mb-4'>Create a New Feed</h2>
        <div className='mb-4'>
          <label htmlFor='title' className='block text-gray-700 font-medium mb-2'>
            Title
          </label>
          <input
            id='title'
            type='text'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError('');
            }}
            placeholder='Enter title...'
            className='w-full border border-gray-400 p-2 rounded-lg'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='description' className='block text-gray-700 font-medium mb-2'>
            Description
          </label>
          <textarea
            id='description'
            rows='4'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setError('');
            }}
            placeholder='Enter description...'
            className='w-full border border-gray-400 p-2 rounded-lg'
          />
        </div>
        {error && (
          <div className='mb-4 text-red-500 text-sm'>
            {error}
          </div>
        )}
        <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'>
          Post
        </button>
      </form>
    </div>
  );
};

export default CreateFeed;
