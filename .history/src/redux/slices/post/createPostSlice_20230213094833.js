import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { post } from '../../../utils/axiosInstance'

export const createPost = createAsyncThunk(
 'post/createPost',
 async (data, thunkAPI) => {
  const response = await post('posts', data)
  try {
   if (response.status === 201) {
    return response.data
   } else {
    return thunkAPI.rejectWithValue(response.data)
   }
  } catch (error) {
   return thunkAPI.rejectWithValue(error.response.data)
  }
 }
)

const initialState = {
 loading: false,
 success: false,
 
