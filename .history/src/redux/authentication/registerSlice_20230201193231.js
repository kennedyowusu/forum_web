import { createSlice, createAction } from '@reduxjs/toolkit';

// Define the register async thunk
export const register = createAction('register');

// Define the initial state using that type
const initialState = {
 loading: false,
 hasErrors: false,
};