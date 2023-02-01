import axios from "axios";

const instance = axios.create({
 baseURL: "https://api.example.com",
 headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer " + localStorage.getItem("token"),
 },
});

// Post Request
export const post = async (url, data) => {
 try {
  const response = await instance.post(url, data);
  if (response.status === 200) {
   return response.data;
  }
 } catch (error) {
  return error.response;
 }
};

// Get Request
export const get = async (url) => {
 try {
  const response = await instance.get(url);
  if (response.status === 200) {
   return response.data;
  }
 } catch (error) {
  return error.response;
 }
};

// Put Request
export const put = async (url, data) => {
 try {
  const response = await instance.put(url, data);
  if (response.status === 200) {
   return response.data;
  }
 } catch (error) {
  return error.response;
 }
};


export default instance;