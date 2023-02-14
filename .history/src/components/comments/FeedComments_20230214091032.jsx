import React from 'react'
import { selectComments } from '../../redux/slices/comment/readComment'

const FeedComments = () => {
 const { comments } = useSelector(selectComments)

 const handleCommentSubmission = (e) => {
   e.preventDefault()
   if (checkEmptyComment(comment)) {
     return
   }
   setComment('')
 }

 
  return (
    <div>
      
    </div>
  )
}

export default FeedComments
