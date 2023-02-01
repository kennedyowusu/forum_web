import axios from "axios";

const instance = axios.create({
 baseURL: "https://api.example.com",
 headers: {
  "Content-Type": "application/json",
 },
});

// Post Request Example
// const data = {
 

export default instance;