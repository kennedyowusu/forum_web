import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './authentication/registerSlice';

const store = configureStore({
 reducer: {
  register: registerSlice,
 },
});

export default store;