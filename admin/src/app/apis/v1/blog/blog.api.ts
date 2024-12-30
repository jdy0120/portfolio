import { Get } from "../../../../lib/axios/request";
import { Post } from "../../../../types/models/v1/blog/blog.types";
import { Query } from "../../../../types/http/Request.type";

export const getPostList = async (query: Query) => {
  const response = await Get<Post[]>("/v1/posts", {
    params: query,
  });

  try {
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostItem = async (id: string) => {
  const response = await Get<Post>(`/v1/posts/${id}`);

  try {
    return response.data;
  } catch (error) {
    throw error;
  }
};
