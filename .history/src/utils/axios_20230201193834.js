import axios from "axios";

const instance = axios.create({
 baseURL: "https://api.example.com",
});

// Add a request interceptor


export default instance;