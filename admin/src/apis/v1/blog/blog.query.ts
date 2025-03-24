import { useMutation, useQuery } from "@tanstack/react-query";
import { createPost, getPostItem, getPostList, updatePost, updatePostStatus } from "./blog.api";
import { Query } from "../../../types/http/Request.type";
import { Post as PostType, RequestPostType } from "../../../types/models/v1/blog/blog.types";

export const usePostList = (query: Query) => {
  return useQuery({
    queryKey: ["post-list"],
    queryFn: () => {
      return getPostList(query);
    },
  });
};

export const usePostItem = (id: string) => {
  return useQuery({
    queryKey: ["post-item", id],
    queryFn: () => {
      return getPostItem(id);
    },
    enabled: true,
  });
};

export const usePostCreate = (id: string | "undefined") => {
  if (id !== "undefined") {
    return useMutation({
      mutationFn: (data: RequestPostType) => {
        return updatePost(id, data);
      },
    });
  } else {
    return useMutation({
      mutationFn: (data: RequestPostType) => {
        return createPost(data);
      },
    });
  }
};

export const useUpdatePostStatus = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<PostType> }) => {
      return updatePostStatus(id, data);
    },
  });
};
