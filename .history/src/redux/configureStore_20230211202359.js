import { configureStore } from '@reduxjs/toolkit';
import register from './authentication/registerSlice';
import login from './authentication/loginSlice';
import readPostSlice from './slices/post/readPostSlice';

const store = configureStore({
 reducer: {
  register,
  login,
  readPostSlice
 },
});

export default store;