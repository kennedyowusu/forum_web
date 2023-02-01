import axios from "axios";

const instance = axios.create({
 baseURL: "https://api.example.com",
 headers: {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Authorization": "Bearer " + localStorage.getItem("token"),
 },
});

// Post Request
export const post = async (url, data) => {
 
};


export default instance;