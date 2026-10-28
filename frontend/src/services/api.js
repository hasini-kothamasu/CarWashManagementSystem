import axios from "axios";

const api = axios.create({
    baseURL: "https://carwashmanagementsystem-51y8.onrender.com/api",
});

export default api;