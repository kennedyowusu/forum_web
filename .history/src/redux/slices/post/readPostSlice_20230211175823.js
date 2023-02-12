import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

export const readPosts = createAsyncThunk(
 "post/readPosts",
 async (data, thunkAPI) => {
  const response = await AxiosInstance.get("/posts");
  try {
   if (response.status === 200) {
    return response.data;
   } else {
    return thunkAPI.rejectWithValue(response.data);
   }
  } catch (error) {
   return thunkAPI.rejectWithValue(error.response.data);
  }
 }
);

const initialState = {
 posts: [],
 status: null,
 error: null,
};

