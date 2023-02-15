import { useState } from 'react'
import Logo from '../../assets/forum.png'
import { Icon } from '@iconify/react'
import FeedComments from '../comments/FeedComments'
import getTimeAgo from '../../utils/getTimeAgo'

const Post = ({ post }) => {
  const [like, setLike] = useState(false)

  const likeColor = like ? 'text-blue-500' : 'text-gray-500'

  const handleLike = () => {
    like ? setLike(false) : setLike(true)
  }

  return (
    <>
      <div className=' p-3 rounded-md shadow-md border border-[#f2f3f7]'>
        <div className='rounded-md px-1'>
          {/* Post Header */}
          <div className='flex items-center'>
            <div className=''>
              <img
                className='rounded-full h-12 w-12'
                src={Logo}
                alt='Profile'
              />
            </div>
            <div className='ml-3'>
              <p className='font-bold '>{post.user.name}</p>
              <p className='text-gray-500 text-sm '>
                {getTimeAgo(post.created_at)}
              </p>
            </div>
          </div>
          {/* Post Title */}
          <div className='mt-3'>
            <p className='font-bold text-lg '>{post.title}</p>
          </div>

          {/* Post Body */}
          <div className='mt-3'>
            <p className='text-gray-500 text-sm text-justify '>
              {post.description}
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
                  <span className='font-bold'>
                    {/* {like ? '1' : '0'} */}
                    {post.likes_count}
                  </span>{' '}
                  Likes
                </p>
              </div>

              <div className='flex items-center ml-8'>
                <Icon
                  icon='material-symbols:comment-rounded'
                  className='text-gray-500 text-md md:lg cursor-pointer hover:text-blue-500 mr-1 w-6 h-6'
                />
                <p className='text-gray-500 text-sm ml-1 hover:text-gray-500'>
                  <span className='font-bold'>{post.comments.length}</span>{' '}
                  Comments
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
          {post.comments.map((comment, index) => (
            <div className='py-5' key={index}>
              <div className='flex items-center'>
                <div className=''>
                  <img
                    className='rounded-full h-12 w-12'
                    src={Logo}
                    alt='Profile'
                  />
                </div>
                <div className='ml-3'>
                  <p className='font-bold '>{comment.user.name}</p>
                  <p className='text-gray-500 text-sm '>{comment.body}</p>
                  <p>
                    <span className='text-gray-500 text-sm '>
                      {getTimeAgo(comment.created_at)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className='border-b mt-3'></div>

          {/* Comment Section */}
          <FeedComments feedId={post.id} />
        </div>
      </div>
    </>
  ) 
}

export default Post
