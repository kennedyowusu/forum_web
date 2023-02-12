import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../services/postService";

const initialState = {
 posts: [],
};

const postSlice = createSlice({
 name: "post",
 initialState,
 reducers: {