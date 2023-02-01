import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/axiosInstance'

// Define the register async thunk
export const register = createAction('register')

export const registerUser = createAsyncThunk(
  'registerUser',
  async (data, thunkAPI) => {
    axiosInstance
     .post('/register', data)
  }
)

const initialState = {
 loading: false,
 error: null,
 success: false,
}

// Define the register slice
const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      registerUser.pending,
      (state, action) => {
        state.loading = true
        state.error = null
        state.success = false
      },
      builder.addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.success = true
      }),
      builder.addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
        state.success = false
      })
    )
  },
})

export default registerSlice.reducer;
export const selectRegisterUser = state => state.register;
export const registerActions = registerSlice.actions;
