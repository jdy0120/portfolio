import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { LoginResponse } from "../../types/models/v1/auth/auth.types";
import { Get } from "./request";

// Request interceptor
const insertAccessToken = (config: InternalAxiosRequestConfig) => {
  const token = sessionStorage.getItem("persist:root");
  // Check if token exists and is valid
  let accessToken;
  try {
    const login = token ? JSON.parse(token).login : null;
    accessToken = JSON.parse(login).accessToken;
  } catch (error) {
    console.error("Failed to parse token:", error);
    accessToken = null; // Ensure accessToken is null on error
  }

  accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdybTE3NzFAc2VlcnNsYWIuY29tIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3Mjc0MjM3OTAsImV4cCI6MTcyNzQyMzgwMH0.4sPnSexWWTf9BKtntHMhos6_62Fsw-AKid3sB8wSnHo";

  if (config.headers && accessToken) {
    config.headers.authorization = `Bearer ${accessToken}`;
  }

  return config;
};

//response interceptor
const refreshAccessToken = async (response: AxiosResponse) => {
  if (response.status === 401) {
    const token = sessionStorage.getItem("login");
    const refreshTokenInStorage = JSON.parse(token || "").state.refreshToken;
    try {
      const accessTokenResponse = await Get<LoginResponse>("/auth/refresh", {
        params: {
          refreshtoken: refreshTokenInStorage,
        },
      });
      const accessToken = accessTokenResponse.data.data.accesstoken;
      const refreshToken = accessTokenResponse.data.data.refreshtoken;

      console.log(accessTokenResponse);
      sessionStorage.setItem(
        "persist:root",
        JSON.stringify({ state: { accessToken, refreshToken } }),
      );
    } catch (error) {
      console.log(error);
    }
  }

  return response;
};

export { insertAccessToken, refreshAccessToken };
