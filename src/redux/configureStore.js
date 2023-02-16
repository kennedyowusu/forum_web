import { configureStore } from '@reduxjs/toolkit';
import register from './authentication/registerSlice';
import login from './authentication/loginSlice';
import post from './slices/post/readPostSlice';
import createPostSlice from './slices/post/createPostSlice'
import readComment from './slices/comment/readComment'
import createCommentSlice from './slices/comment/createComment'
import updatePostLikesCount from './slices/likes/updatePostLikesCountSlice'
  
const store = configureStore({
  reducer: {
    register,
    login,
    post,
    createPost: createPostSlice,
    readComment,
    createComment: createCommentSlice,
    updatePostLikesCount
  },
})

export default store;