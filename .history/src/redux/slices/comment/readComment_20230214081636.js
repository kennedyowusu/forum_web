import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get } from '../../../utils/axiosInstance'

export const readComments = createAsyncThunk(
 'comment/readComments',
 async (postId, thunkAPI) => {
  