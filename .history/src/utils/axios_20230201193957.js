import axios from "axios";

const instance = axios.create({
 baseURL: "https://api.example.com",
});

// Post request


export default instance;