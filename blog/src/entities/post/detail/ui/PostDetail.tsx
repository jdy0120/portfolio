import React from "react";
import Wrapper from "@/entities/post/post/wrapper/ui/Wrapper";
import Comment from "@/entities/post/comment/ui/Comment";
import styles from "./PostDetail.module.css";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getPostItem } from "../apis/post-item";
interface PostDetailProps {
  slug: string;
}

const PostDetail = async ({ slug }: PostDetailProps) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post-item", slug],
    queryFn: () => getPostItem(slug),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={styles.Container}>
      <HydrationBoundary state={dehydratedState}>
        <Wrapper queryKey='post-item' />
      </HydrationBoundary>
      <Comment />
    </div>
  );
};

export default PostDetail;
