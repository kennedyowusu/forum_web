import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';

// Define the register async thunk
export const register = createAction('register');

export const registerUser = createAsyncThunk(
  'registerUser',