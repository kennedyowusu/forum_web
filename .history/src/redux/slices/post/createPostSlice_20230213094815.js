import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { post } from '../../../utils/axiosInstance'

export const createPost = createAsyncThunk(
 'post/createPost',
 
