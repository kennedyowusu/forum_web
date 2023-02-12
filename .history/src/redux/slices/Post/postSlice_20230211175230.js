import { createSlice } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

const initialState = {
 posts: [],
};

const postSlice = createSlice({
 name: "post",
 initialState,
 reducers: {