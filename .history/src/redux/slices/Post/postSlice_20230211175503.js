import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

export const readPosts = createAsyncThunk(
 "post/readPosts",
 async (data, thunkAPI) => {
  const response = await AxiosInstance.get("/posts");
  try {
   if
  } catch (error) {
   return thunkAPI.rejectWithValue(error.response.data);
  }
  // return response.data;
 }
);