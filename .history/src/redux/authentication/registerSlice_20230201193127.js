import { createSlice, createAction } from '@reduxjs/toolkit';

const registerSlice = createSlice({
 name: 'register',
 initialState: {
  loading: false,
  error: null,
  success: false,
 },
 reducers: {
  registerRequest: (state) => {
   state.loading = true;
  }
  registerSuccess: (state) => {