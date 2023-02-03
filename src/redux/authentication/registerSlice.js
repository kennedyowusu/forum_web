import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../utils/axiosInstance";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (data, thunkAPI) => {
    try {
      const response = await post("/register", data);

      if (response.status === 201) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      if (error?.response?.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue({
          message: "Something went wrong",
          errors: {},
        });
      }
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  user: {},
  errorMessage: "",
  errorStrings: [],
};

// Define the register slice
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      registerUser.pending,
      (state) => {
        state.loading = true;
        state.success = false;
        state.errorMessage = "";
        state.errorStrings = [];
      },
      builder.addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.user;
        state.errorMessage = "";
        state.errorStrings = [];
      }),
      builder.addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.user = {};
        state.errorMessage = action.payload.message;
        state.errorStrings = Object.values(action.payload.errors).flat();
      })
    );
  },
});

export default registerSlice.reducer;

export const SelectRegisterState = (state) => state.register;
export const selectRegisterLoading = (state) => state.register.loading;
export const selectRegisterSuccess = (state) => state.register.success;
export const selectRegisterUser = (state) => state.register.user;
export const selectRegisterErrorMessage = (state) =>
  state.register.errorMessage;
export const selectRegisterErrorStrings = (state) =>
  state.register.errorStrings;

export const registerActions = registerSlice.actions;
