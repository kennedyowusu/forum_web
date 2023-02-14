import { configureStore } from '@reduxjs/toolkit';
import register from './authentication/registerSlice';
import login from './authentication/loginSlice';
import post from './slices/post/readPostSlice';
import createPostSlice from './slices/post/createPostSlice'
import readComment from './slices/comment/readComment'
import createCommentSlice from './slices/comment/createComment'
  
const store = configureStore({
  reducer: {
    register,
    login,
    post,
    createPost: createPostSlice,
    comment: readComment,
    createComment: createComment
  },
})

export default store;