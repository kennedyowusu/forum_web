import { createSlice } from "@reduxjs/toolkit";
import insta

const initialState = {
 posts: [],
};

const postSlice = createSlice({
 name: "post",
 initialState,
 reducers: {