import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../../utils/axiosInstance";

export const readPosts = createAsyncThunk(
 "post/readPosts",
 async (thunkAPI) => {
  const response = await get("feeds");
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
   state.success = false;
   state.errorMessage = "";
   state.errorStrings = [];
  });
  builder.addCase(readPosts.fulfilled, (state, action) => {
   state.loading = false;
   state.success = true;
   state.posts = action.payload.posts;
   state.errorMessage = "";
   state.errorStrings = [];
  });
  builder.addCase(readPosts.rejected, (state, action) => {
   state.loading = false;
   state.success = false;
   state.errorMessage = action?.payload?.message || "Something went wrong";
   state.errorStrings = Object.values(action?.payload?.errors || []).flat()
  });
 }
});

export default readPostSlice.reducer;

export const readPostActions = readPostSlice.actions

export const selectPosts = (state) => state.post.posts;
export const selectLoading = (state) => state.post.loading;
export const selectSuccess = (state) => state.post.success;
export const selectErrorMessage = (state) => state.post.errorMessage;
export const selectErrorStrings = (state) => state.post.errorStrings;

// export const selectPost = (state, postId) =>
//  state.post.posts.find((post) => post.id === postId);

// export const selectPostComments = (state, postId) =>
//  state.post.posts.find((post) => post.id === postId).comments;

// export const selectPostLikes = (state, postId) =>
//  state.post.posts.find((post) => post.id === postId).likes;

// export const selectPostCommentsCount = (state, postId) =>
//  state.post.posts.find((post) => post.id === postId).comments.length;

// export const selectPostLikesCount = (state, postId) =>
//  state.post.posts.find((post) => post.id === postId).likes.length;

// export const selectPostLiked = (state, postId) =>
//  state.post.posts.find((post) => post.id === postId).liked;

// export const selectPostCommented = (state, postId) =>
//  state.post.posts.find((post) => post.id === postId).commented;


