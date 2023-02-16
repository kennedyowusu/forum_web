import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get } from '../../../utils/axiosInstance'

export const readComments = createAsyncThunk(
 'comment/readComments',
 async (postId, thunkAPI) => {
  const response = await get(`comments/${postId}`)
  try {
   if (response.status === 200) {
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