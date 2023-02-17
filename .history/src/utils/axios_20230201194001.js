import axios from "axios";

const instance = axios.create({
 baseURL: "https://api.example.com",
});

// Post request
instance.post("/users", {
 name: "John Doe",
});


export default instance;