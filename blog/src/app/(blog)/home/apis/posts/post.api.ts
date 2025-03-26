import { Get } from "@/shared/libs/axios/request";
import { ListQuery } from "@/shared/types/axios/common/ListQuery.type";
import { PostAttributes } from "@/shared/types/models/post/post.type";

const getPosts = async (query: ListQuery) => {
  try {
    const response = await Get<PostAttributes[]>("/v1/posts", {
      params: query,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getPosts };
