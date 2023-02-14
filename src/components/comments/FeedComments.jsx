import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../assets/forum.png'
import { Icon } from '@iconify/react'
import { toast } from 'react-toastify'
import { createComment, selectCreateComment } from '../../redux/slices/comment/createComment'

const FeedComments = ({ feedId }) => {
  const [comment, setComment] = useState('')
  const [error, setError] = useState('')

  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch()
  const { loading, success, errorMessage } =
    useSelector(selectCreateComment)

  useEffect(() => {
    if (success && isSubmitted) {
      toast.success('Comment created successfully')
      setIsSubmitted(false)
    } else if (errorMessage) {
      toast.error(errorMessage)
    }
  }, [success, errorMessage, isSubmitted, dispatch, feedId])

  function checkEmptyComment(comment) {
    if (comment.trim() === '') {
      setError('Comment cannot be empty')
      return true
    }
  }

  const handleCommentSubmission = (e) => {
    e.preventDefault()
    // console.log('Comment: ', comment)
    setError('')

    if (checkEmptyComment(comment)) {
      return
    }
    
    dispatch(createComment({ feedId, comment }))

    setIsSubmitted(true)
  
    setComment('')
  }

  return (
    <div className='mt-3'>
      <div className='flex items-center'>
        <div className=''>
          <img className='rounded-full h-12 w-12' src={Logo} alt='Profile' />
        </div>
        <form onSubmit={handleCommentSubmission}>
          <div className='flex items-center justify-between'>
            <div className='mx-3'>
              <input
                type='text'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className='w-full rounded-md py-2 px-4 outline-0 bg-[#f2f3f7] pl-3 h-12
                  md:pl-3 md:h-12 md:rounded-md md:p-1 md:mr-1 md:w-[25rem]
                '
                placeholder='Add a comment...'
              />
            </div>
            <div className='mr-5'>
              <button type='submit'>
                <Icon
                  icon='material-symbols:send'
                  className='text-gray-500 text-md md:lg cursor-pointer hover:text-gray-500 mr-1  rounded-full h-12 w-12'
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FeedComments
