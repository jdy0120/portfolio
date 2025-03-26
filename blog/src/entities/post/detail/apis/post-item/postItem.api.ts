import { Get } from "@/shared/libs/axios/request";
import { PostAttributes } from "@/shared/types/models/post/post.type";

export const getPostItem = async (slug: string) => {
  try {
    const response = await Get<PostAttributes>(`/v1/posts/slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
