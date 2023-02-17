import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const store = configureStore({
 reducer: {
  // ...reducers
 },
});

export default store;