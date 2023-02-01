import axios from "axios";

const instance = axios.create({
 baseURL: "https://api.example.com",
 headers: {
  "Content-Type": "application/json",
 },
});

// Post Request 

export default instance;