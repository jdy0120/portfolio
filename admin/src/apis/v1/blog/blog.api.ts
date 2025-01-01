import { Get, Post, Put } from "../../../lib/axios/request";
import { Query } from "../../../types/http/Request.type";
import {
  Post as PostType,
  RequestPostType,
} from "../../../types/models/v1/blog/blog.types";

export const getPostList = async (query: Query) => {
  const response = await Get<PostType[]>("/v1/posts", {
    params: query,
  });

  try {
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostItem = async (id: string) => {
  const response = await Get<PostType>(`/v1/posts/${id}`);

  try {
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (data: RequestPostType) => {
  try {
    const response = await Post<PostType>("/v1/posts", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (
  id: string,
  data: RequestPostType
) => {
  try {
    const response = await Put<PostType>(`/v1/posts/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
