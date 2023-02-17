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
 loading: false,
 success: false,
 posts: [],
 errorMessage: "",
 errorStrings: [],
};

const readPostSlice = createSlice({
 name: "post",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(readPosts.pending, (state) => {
   state.loading = true;
   
  });
  builder.addCase(readPosts.fulfilled, (state, action) => {
   state.loading = false;
   state.success = true;
   state.posts = action.payload;
  });
  builder.addCase(readPosts.rejected, (state, action) => {
   state.loading = false;
   state.success = false;
   state.errorMessage = action.payload.message;
   state.errorStrings = action.payload.errors;
  });
 }
});

export default readPostSlice.reducer;
