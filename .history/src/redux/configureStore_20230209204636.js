import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './authentication/registerSlice';
import loginSlice from './authentication/loginSlice';

const store = configureStore({
 reducer: {
  register: registerSlice,
 },
});

export default store;