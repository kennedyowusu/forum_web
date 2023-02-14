import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { post } from '../../../utils/axiosInstance'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { post } from '../../../utils/axiosInstance'

export const createComment = createAsyncThunk(
  'comment/createComment',
  async (commentData, thunkAPI) => {
    const { feedId, content } = commentData
    const response = await post(`feed/comment/${feedId}`, { content })
    try {
      if (response.status === 201) {
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
  loading: false,
  success: false,
  comment: {},
  errorMessage: '',
  errorDetails: [],
}

const createCommentSlice = createSlice({
  name: 'createComment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createComment.pending, (state) => {
      state.loading = true
      state.success = false
      state.errorMessage = ''
      state.errorDetails = []
    })
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.comment = action.payload
      state.errorMessage = ''
      state.errorDetails = []
    })
    builder.addCase(
      createComment.rejected,
      (state, { payload: { message, errors } }) => {
        state.loading = false
        state.success = false
        state.errorMessage = message || 'Something went wrong'
        state.errorDetails = errors ? Object.values(errors).flat() : []
      }
    )
  },
})

export default createCommentSlice.reducer

export const createCommentActions = createCommentSlice.actions

export const selectComment = (state) => state.createComment.comment

export const selectCommentLoading = (state) => state.createComment.loading
