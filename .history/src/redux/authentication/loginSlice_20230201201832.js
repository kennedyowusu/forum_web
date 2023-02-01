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
  