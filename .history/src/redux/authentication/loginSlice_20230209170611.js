import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../utils/axiosInstance";

export const loginUser = createAsyncThunk(
  "loginUser",
  async (data, thunkAPI) => {
    // post("/login", data);
    try {
      const response = await post('/login', data)

      if (response.status === 200) {
        return response.data
      } else {
        return thunkAPI.rejectWithValue(response.data)
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
  
);

const initialState = {
  loading: false,
  error: null,
  success: false,
};

// Define the login slice
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loginUser.pending,
      (state, action) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      },
      builder.addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      }),
      builder.addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      })
    );
  },
});

export default loginSlice.reducer;
export const selectLoginUser = (state) => state.login;
export const loginActions = loginSlice.actions;
