import axios from "axios";
import {
  insertAccessToken,
  refreshAccessToken,
} from "./interceptors";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://admin.doyeonism.com",
  },
});

// insert access token to request header
axiosInstance.interceptors.request.use(insertAccessToken, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  refreshAccessToken,
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
