import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get } from '../../../utils/axiosInstance'

export const readComments = createAsyncThunk(
 'comment/readComments',
 async (postId, thunkAPI) => {
  const response = await get(`comments/${postId}`)
  try {
   if (response.status === 200) {
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
 comments: [],
 errorMessage: '',
 errorDetails: [],
}

const readCommentSlice = createSlice({
 name: 'comment',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(readComments.pending, (state) => {
   state.loading = true
   state.success = false
   state.errorMessage = ''
   state.errorDetails = []
  })
  builder.addCase(readComments.fulfilled, (state, action) => {
   state.loading = false
   state.success = true
   state.comments = action.payload.comments
   state.errorMessage = ''
   state.errorDetails = []
  })
  builder.addCase(
   readComments.rejected,
   (state, { payload: { message, errors } }) => {
    state.loading = false
    state.success = false
    state.errorMessage = message || 'Something went wrong'
    state.errorDetails = errors ? Object.values(errors).flat() : []
   }
  )
 }
})

export default readCommentSlice.reducer

