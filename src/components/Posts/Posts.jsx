import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readPosts, selectPosts } from '../../redux/slices/post/readPostSlice'
import Post from './Post'

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)

  useEffect(() => {
    dispatch(readPosts())
    if (posts) {
      console.log(posts)
    } else {
      console.log('posts is undefined')
    }
  }, [])

  return (
    <div
      className='flex mx-2 px-4 py-3 sm:px-4 md:px-4 -my-2 sm:max-w-[25rem] md:max-w-[40rem] lg:w-full bg-white flex-col w-full gap-y-4'
    >
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  )
}

export default Posts
