import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPosts } from "./post.api";
import { ListQuery } from "@/shared/types/axios/common/ListQuery.type";

type UseGetPostsProps = ListQuery & {
  queryKey: string;
  isInfinite?: boolean;
};

const useGetPosts = ({ page, count, sort, dir, queryKey }: UseGetPostsProps) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => getPosts({ page, count, sort, dir }),
  });
};

export { useGetPosts };
