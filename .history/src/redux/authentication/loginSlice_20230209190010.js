import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../utils/axiosInstance";

export const loginUser = createAsyncThunk(
  "loginUser",
  async (data, thunkAPI) => {
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
  success: false,
  user: {},
  errorMessage: '',
  errorStrings: [],
}

// Define the login slice
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loginUser.pending,
      (state) => {
        state.loading = true;
        state.success = false;
        state.errorMessage = '';
        state.errorStrings = [];
      },
      builder.addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.user;
        state.errorMessage = '';
        state.errorStrings = [];
        localStorage.setItem('token', action.payload.token)
      }),
      builder.addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.user = {};
        state.errorMessage = action?.payload?.message || 'Something went wrong';
        state.errorStrings = Object.values(action?.payload?.errors || {}).flat();
      })
    );
  },
});

export default loginSlice.reducer;
// export const selectLoginUser = (state) => state.login;


export const selectLoginState = (state) => state.login;
export const selectLoginUser = (state) => state.login.user;
export const selectLoginLoading = (state) => state.login.loading;
export const selectLoginSuccess = (state) => state.login.success;
export const selectLoginErrorMessage = (state) => state.login.errorMessage;
export 

export const loginActions = loginSlice.actions;
