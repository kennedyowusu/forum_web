import React from 'react'
import { useState, useEffect } from 'react'
import { selectComments, readComments } from '../../redux/slices/comment/readComment'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../assets/forum.png'
import { Icon } from '@iconify/react'
import { toast } from 'react-toastify'

const FeedComments = () => {
 const [comment, setComment] = useState('')
 const [error, setError] = useState('')

  const dispatch = useDispatch()
  const { loading, sucess, comments, errorMessage } = useSelector(selectComments)

 useEffect(() => {
  if(success)
 })

 // useEffect(() => {
 //  dispatch(readComments())
 //  if (comments) {
 //   console.log(comments)
 //  } else {
 //   console.log('comments is undefined')
 //  }
 // }, [dispatch, comments])


  const checkEmptyField = () => {
    if (comment.trim() === '') {
      return true
    }
    return false
  }

  // const handleComment = () => {
  //   if (checkEmptyField()) {
  //     return
  //   }

  //   setComment('')
  // }

  function checkEmptyComment(comment) {
    if (comment) {
      setError('Comment cannot be empty')
      return true
    }
  }

  const handleCommentSubmission = (e) => {
   e.preventDefault()
   setError('')

    if (checkEmptyComment(comment)) {
      return
    }
    setComment('')
  }

  return (
    <div className='mt-3'>
      <div className='flex items-center'>
        <div className=''>
          <img className='rounded-full h-12 w-12' src={Logo} alt='Profile' />
        </div>
        <form action='' onSubmit={handleCommentSubmission}>
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
              <Icon
                onClick={checkEmptyComment}
                icon='material-symbols:send'
                className='text-gray-500 text-md md:lg cursor-pointer hover:text-gray-500 mr-1  rounded-full h-12 w-12'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FeedComments
