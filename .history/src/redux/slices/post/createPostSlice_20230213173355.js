import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { post } from '../../../utils/axiosInstance'

export const createPost = createAsyncThunk(
 'post/createPost',
 async (data, thunkAPI) => {
  const response = await post('posts', data)
  // try {
  //  if (response.status === 201) {
  //   return response.data
  //  } else {
  //   return thunkAPI.rejectWithValue(response.data)
  //  }
  // } catch (error) {
  //   return thunkAPI.rejectWithValue({
  //     message: error.response?.data?.message || 'Something went wrong',
  //     errors: error.response?.data?.errors || [],
  //   })
  // }

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
  builder.addCase(createPost.rejected, (state, action) => {
   state.loading = false
   state.success = false
   state.errorMessage = action?.payload?.message || 'Something went wrong'
   state.errorDetails = Object.values(action?.payload?.errors || []).flat()
  })
 }
})

export default createPostSlice.reducer

export const createPostActions = createPostSlice.actions

export const selectPost = (state) => state.post.post


 /*

 This code is not necessarily incorrect. It is creating a Redux Toolkit slice for handling a "create post" feature, which includes an asynchronous thunk for making a post request to the API and updating the state accordingly.

However, it is not clear what the expected behavior is or what the specific data structure of the API response is. It is also not clear what the post function from ../../../utils/axiosInstance is, or what the structure of the data object is. It is also not clear what the expected behavior is for the rejected case.

**/ 
