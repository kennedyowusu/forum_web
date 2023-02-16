import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { post } from '../../../utils/axiosInstance'

export const createPost = createAsyncThunk(
  'post/createPost',
  async (data, thunkAPI) => {
    const response = await post('feed/store', data)
    try {
      if (response.status === 201) {
        return response.data
      }
      return thunkAPI.rejectWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response?.data?.message || 'Something went wrong',
        errors: error.response?.data?.errors || [],
      })
    }
  }
)

const initialState = {
  loading: false,
  success: false,
  post: {},
  errorMessage: '',
  errorDetails: [],
}

const createPostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPost.pending, (state) => {
      state.loading = true
      state.success = false
      state.errorMessage = ''
      state.errorDetails = []
    })
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.post = action.payload
      state.errorMessage = ''
      state.errorDetails = []
    })
    builder.addCase(
      createPost.rejected,
      (state, { payload: { message, errors } }) => {
        state.loading = false
        state.success = false
        state.errorMessage = message || 'Something went wrong'
        state.errorDetails = errors ? Object.values(errors).flat() : []
      }
    )
  },
})

export default createPostSlice.reducer

export const createPostActions = createPostSlice.actions

export const selectPost = (state) => state.post.post
