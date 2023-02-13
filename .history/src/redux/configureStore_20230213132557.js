import { configureStore } from '@reduxjs/toolkit';
import register from './authentication/registerSlice';
import login from './authentication/loginSlice';
import post from './slices/post/readPostSlice';
import createPost from './slices/post/createPostSlice';

const store = configureStore({
 reducer: {
  register,
  login,
  post,
 },
});

export default store;