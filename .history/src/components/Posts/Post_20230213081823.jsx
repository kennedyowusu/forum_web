import { useState, useEffect } from 'react'
import Logo from '../../assets/forum.png'
import { Icon } from '@iconify/react'
import {
  readPosts,
  selectPosts,
} from '../../redux/slices/post/readPostSlice'
import { useDispatch, useSelector } from 'react-redux'

const Post = () => {
  const [like, setLike] = useState(false)
  const [comment, setComment] = useState('')

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
  return comment.trim() === '';
}


  return (
    <div className='rounded-md px-1'>
      
    </div>
  )
}

export default Post
