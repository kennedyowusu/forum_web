import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';

// Define the register async thunk
export const register = createAction('register');

export const registerUser = createAsyncThunk(
 'registerUser',
 async (data, thunkAPI) => {
  const response = await fetch('http://localhost:5000/api/auth/register', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(data),
  });
  const responseData = await response.json();
  if (!response.ok) {
   throw new Error(responseData.message);
  }
  return responseData;
 }
);

// Define the register slice
const registerSlice = createSlice({
 name: 'register',
 initialState: {
  loading: false,
  error: null,
  success: false,
 },
 reducers: {},
 extraReducers: builder => {
  
  
);

export default registerSlice.reducer;