import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { post } from '../../../utils/axiosInstance'

export const createPost = createAsyncThunk(
 'post/createPost',
 async (data, thunkAPI) => {
  const response = await post('posts', data)
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
 post: {},
 errorMessage: '',
 errorStrings: [],
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
   state.errorStrings = []
  })
  builder.addCase(createPost.fulfilled, (state, action) => {
   state.loading = false
   state.success = true
   state.post = action.payload.post
   state.errorMessage = ''
   state.errorStrings = []
  })
  builder.addCase(createPost.rejected, (state, action) => {
   state.loading = false
   state.success = false
   state.errorMessage = action?.payload?.message || 'Something went wrong'
   state.errorStrings = Object.values(action?.payload?.errors || []).flat()
  })
 }
})

export default createPostSlice.reducer

export const createPostActions = createPostSlice.actions

export const selectPost = (state) => state.post.post

export const selectLoading = (state) => state.post.loading


// 

