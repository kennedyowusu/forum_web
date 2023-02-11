import { configureStore } from '@reduxjs/toolkit';
import register from './authentication/registerSlice';
import login from './authentication/loginSlice';

const store = configureStore({
 reducer: {
  register,
  login: loginSlice,
 },
});

export default store;