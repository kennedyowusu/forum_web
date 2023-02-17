import { createSlice } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

export readPosts = () => async (dispatch) => {
  try {
    const res = await AxiosInstance.get("/posts");
    dispatch(getPosts(res.data));
  } catch (err) {
    console.log(err);
  }
}