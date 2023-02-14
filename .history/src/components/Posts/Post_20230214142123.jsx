import { useState, useEffect } from 'react'
import Logo from '../../assets/forum.png'
import { Icon } from '@iconify/react'
import {
  readPosts,
  selectPosts,
} from '../../redux/slices/post/readPostSlice'
import { useDispatch, useSelector } from 'react-redux'
import FeedComments from '../comments/FeedComments'

const Post = () => {
  const [like, setLike] = useState(false)

  const dispatch = useDispatch()
  const { posts } = useSelector(selectPosts);

  useEffect(() => {
    dispatch(readPosts())
    if (posts) {
      console.log(posts)
    } else {
      console.log('posts is undefined')
    }
  }, [dispatch, posts])

  const likeColor = like ? 'text-blue-500' : 'text-gray-500'

  const handleLike = () => {
    like ? setLike(false) : setLike(true)
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
          {/* {posts.map((post) => (
            <>
              <p className='font-bold '>{post.author}</p>
              <p className='text-gray-500 text-sm '>{post.created_at}</p>
            </>
          ))} */}
        </div>
      </div>
      {/* Post Title */}
      <div className='mt-3'>
        <p className='font-bold text-lg '>Lorem ipsum dolor sit amet.</p>
        {/* {posts.map((post) => (
          <p className='font-bold text-lg '>{post.title}</p>
        ))} */}
      </div>

      {/* Post Body */}
      <div className='mt-3'>
        <p className='text-gray-500 text-sm text-justify '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quod.
        </p>
        {/* {posts.map((post) => (
          <p className='text-gray-500 text-sm text-justify '>
            {post.description}
          </p>
        ))} */}
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
              {/* {
                posts.map((post) => (
                  <span className='font-bold'>{post.likes}</span>
                ))
              } */}
            </p>
          </div>

          <div className='flex items-center ml-8'>
            <Icon
              icon='material-symbols:comment-rounded'
              className='text-gray-500 text-md md:lg cursor-pointer hover:text-blue-500 mr-1 w-6 h-6'
            />
            <p className='text-gray-500 text-sm ml-1 hover:text-gray-500'>
              <span className='font-bold'>2</span> Comments
              {/* {
                posts.map((post) => (
                  <span className='font-bold'>{post.comments}</span>
                ))
              } */}
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

      {/* Display all comments */}
      <div className='flex items-center'>
        <div className=''>
          <img className='rounded-full h-12 w-12' src={Logo} alt='Profile' />
        </div>
        <div className='ml-3'>
          <p className='font-bold '>Kennedy</p>
          <p className='text-gray-500 text-sm '>
            user's comment goes here
          </p>
          {/* {posts.map((post) => (
            <>
              <p className='font-bold '>{}</p>
              <p className='text-gray-500 text-sm '>{post.created_at}</p>
            </>
          ))} */}
        </div>
      </div>
      <div className='border-b mt-3'></div>

      {/* Comment Section */}
      <FeedComments />
    </div>
  )
}

export default Post
