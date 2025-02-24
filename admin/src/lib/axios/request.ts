import { AxiosRequestConfig, AxiosResponse } from "axios";

import { axiosInstance } from "./instance";

import { CommonResponse } from "../../types/http/Response.type";

const Get = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axiosInstance.get(url, config);
  return response;
};

const Post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axiosInstance.post(url, data, config);
  return response;
};

const Put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axiosInstance.put(url, data, config);
  return response;
};

const Patch = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axiosInstance.patch(url, data, config);
  return response;
};

const Delete = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axiosInstance.delete(url, config);
  return response;
};

export { Delete, Get, Patch, Post, Put };
