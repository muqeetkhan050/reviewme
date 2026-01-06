// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/reviewme", // backend URL
// });

// // Automatically attach token if exists
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default API;

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/reviewme",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
