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
 extraReducers: {
  [registerUser.pending]: (state, action) => {
   state.loading = true;
   state.error = null;
   state.success = false;
  }
  [registerUser.fulfilled]: (state, action) => {
   state.loading = false;
   state.error = null;
   state.success = true;
  },
  [registerUser.rejected]: (state, action) => {
   state.loading = false;
   state.error = action.error.message;
   state.success = false;
  }
 }
});

export default registerSlice.reducer;

// Path: src/redux/authentication/registerSlice.js