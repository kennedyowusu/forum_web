import axios from "axios";

const instance = axios.create({
 baseURL: "https://api.example.com",
 headers: {
  "Content-Type": "application/json",
  
 },
});

// Post Request
export const post = async (url, data) => {
 try {
  const response = await instance.post(url, data);
  return response;
 } catch (error) {
  return error;
 }
};


export default instance;