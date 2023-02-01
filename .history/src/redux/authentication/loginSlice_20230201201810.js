import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/axiosInstance'

export const loginUser = createAsyncThunk(