import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { post } from '../../../utils/axiosInstance'
import { updatePostComments } from '../post/readPostSlice'

export const createComment = createAsyncThunk(
  'comment/createComment',
  async (commentData, thunkAPI) => {
    const { feedId, comment } = commentData
    const response = await post(`feed/comment/${feedId}`, { body: comment })
    try {
      if (response.status === 201) {
        thunkAPI.dispatch(
          updatePostComments({
            postId: feedId,
            comments: response.data.comments,
          })
        )
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
    builder.addCase(createComment.fulfilled, (state) => {
      state.loading = false
      state.success = true
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

export const selectCreateComment = (state) => state.createComment
