import { useQuery } from "@tanstack/react-query";
import { getPostItem, getPostList } from "./blog.api";
import { Query } from "../../../types/http/Request.type";

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
  });
};
