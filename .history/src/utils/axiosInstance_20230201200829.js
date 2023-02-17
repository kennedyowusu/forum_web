import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://192.168.100.10:8000/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
})

// Post Request
export const post = async (url, data) => {
 try {
  const response = await axiosInstance.post(url, data);
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
  const response = await axiosInstance.get(url);
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
  const response = await axiosInstance.put(url, data);
  if (response.status === 200) {
   return response.data;
  }
 } catch (error) {
  return error.response;
 }
};

// Delete Request
export const remove = async (url) => {
 try {
  const response = await axiosInstance.delete(url);
  if (response.status === 200) {
   return response.data;
  }
 } catch (error) {
  return error.response;
 }
};


export default axiosInstance;