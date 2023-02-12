import { configureStore } from '@reduxjs/toolkit';
import register from './authentication/registerSlice';
import login from './authentication/loginSlice';
import 

const store = configureStore({
 reducer: {
  register,
  login,
 },
});

export default store;