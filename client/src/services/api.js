import axios from "axios";
// const Backend_url= `{import.meta.env.VITE_BACKEND_URL}`;
const Backend_url = import.meta.env.VITE_BACKEND_URL;

console.log("Backend URL:", Backend_url);
const API = axios.create({
  baseURL: Backend_url,
});

export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);
