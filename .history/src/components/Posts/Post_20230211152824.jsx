import { useState } from 'react'
import Logo from '../../assets/forum.png'
import { Icon } from '@iconify/react'

const Post = () => {
  const [like, setLike] = useState(false)
  const [comment, setComment] = useState('')

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
    div.m
  )
}

export default Post
