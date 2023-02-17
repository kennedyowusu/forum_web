import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/axiosInstance'

export const loginUser = createAsyncThunk(
 'loginUser',
 async (data, thunkAPI) => {
   axiosInstance
    .post('/login', data)
 }
)

const initialState = {
 loading: false,
 error: null,
 success: false,
}

// Define the login slice
const loginSlice = createSlice({
 name: 'login',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
   builder.addCase(
     loginUser.pending,
     (state, action) => {
       state.loading = true
       state.error = null
       state.success = false
     },
     builder.addCase(loginUser.fulfilled, (state, action) => {
       state.loading = false
       state.error = null
       state.success = true
     }),
     builder.addCase(loginUser.rejected, (state, action) => {
       state.loading = false
       state.error = action.error.message
       state.success = false
     })
   )
 }