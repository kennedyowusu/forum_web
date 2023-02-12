import { useState, useEffect } from 'react'
import Logo from '../../assets/forum.png'
import { Icon } from '@iconify/react'
import { readPostActions, selectPosts } from '../../redux/slices/post/readPostSlice'
import { useDispatch, useSelector } from 'react-redux'

const Post = () => {
  const [like, setLike] = useState(false)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()
  const { loading, success, posts, errorMessage, errorStrings } = useSelector(selectPosts);

  useEffect(() => {
  dispatch(readPostActions.readPosts())
  }, [dispatch])

  const likeColor = like ? 'text-blue-500' : 'text-gray-500'

  const handleLike = () => {
    like ? setLike(false) : setLike(true)
  }

  const checkEmptyField = () => {
    if (comment.trim() === '') {
    return true
    }
    return false
  }

  const handleComment = () => {
    if (checkEmptyField()) {
      return
    }

    setComment('')
  }

  return (
    <div className='rounded-md px-1'>
      {/* Post Header */}
      <div className='flex items-center'>
        <div className=''>
          <img className='rounded-full h-12 w-12' src={Logo} alt='Profile' />
        </div>
        <div className='ml-3'>
          <p className='font-bold '>Kennedy</p>
          <p className='text-gray-500 text-sm '>2 hours ago</p>
        </div>
      </div>
      {/* Post Title */}
      <div className='mt-3'>
        <p className='font-bold text-lg '>Lorem ipsum dolor sit amet.</p>
      </div>

      {/* Post Body */}
      <div className='mt-3'>
        <p className='text-gray-500 text-sm text-justify '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quod.
        </p>
      </div>

      {/* Post Footer */}
      <div className='mt-3 mb-3'>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <Icon
              icon='wpf:like'
              className={`text-md md:lg cursor-pointer hover:text-blue-500 mr-1 w-6 h-6 ${likeColor}`}
              onClick={handleLike}
            />
            <p className='text-gray-500 text-sm ml-1 hover:text-gray-500'>
              <span className='font-bold'>{like ? '1' : '0'}</span> Likes
            </p>
          </div>

          <div className='flex items-center ml-8'>
            <Icon
              icon='material-symbols:comment-rounded'
              className='text-gray-500 text-md md:lg cursor-pointer hover:text-blue-500 mr-1 w-6 h-6'
            />
            <p className='text-gray-500 text-sm ml-1 hover:text-gray-500'>
              <span className='font-bold'>2</span> Comments
            </p>
          </div>

          <div className='flex items-center ml-8'>
            <Icon
              icon='ic:baseline-delete'
              className='text-gray-500 text-md md:lg cursor-pointer hover:text-gray-500 mr-1 w-6 h-6'
            />
          </div>
        </div>
        <div className='border-b mt-3'></div>
      </div>

      {/* Comment Section */}
      <div className='mt-3'>
        <div className='flex items-center'>
          <div className=''>
            <img className='rounded-full h-12 w-12' src={Logo} alt='Profile' />
          </div>
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
                onClick={handleComment}
                icon='material-symbols:send'
                className='text-gray-500 text-md md:lg cursor-pointer hover:text-gray-500 mr-1  rounded-full h-12 w-12'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
