import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { post } from '../../../utils/axiosInstance'

// Async thunk to update the like count for a post
export const likePost = createAsyncThunk(
  'post/likePost',
  async (postId, { rejectWithValue }) => {
    try {
      const response = await post(
        `feed/like/${postId}`
      )
      console.log(response.data.likes_count)
      return response.data.likes_count
     
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

// The initial state of the slice
const initialState = {
  loading: false,
  success: false,
  likesCount: 0,
  errorMessage: '',
  errorDetails: [],
}

// Slice to handle updating the like count for a post
const postSlice = createSlice({
  name: 'updatePostLikesCount',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(likePost.pending, (state) => {
        state.loading = true
        state.success = false
        state.errorMessage = ''
        state.errorDetails = []
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.likesCount = action.payload
        state.errorMessage = ''
        state.errorDetails = []
      })
      .addCase(likePost.rejected, (state, { payload: { message, errors } }) => {
        state.loading = false
       state.success = false
       state.errorMessage = message || 'Something went wrong'
       state.errorDetails = errors ? Object.values(errors).flat() : []
      })
  },
})

export default postSlice.reducer

export const updatePostLikesCountAction = postSlice.actions

export const selectUpdatePostLikesCount = (state) => state.updatePostLikesCount
