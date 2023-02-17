import { configureStore } from '@reduxjs/toolkit';
import register from './authentication/registerSlice';
import login from './authentication/loginSlice';
import post from './slices/post/readPostSlice';
import create

const store = configureStore({
 reducer: {
  register,
  login,
  post,
 },
});

export default store;