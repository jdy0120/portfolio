import React from "react";
import Sidebar from "@/widgets/sidebar/ui/Sidebar";
import User from "@/entities/user/ui/User";
import PostList from "@/entities/post/card/ui/PostList";
import styles from "./page.module.css";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getPosts } from "./apis/posts";

const page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["newest-posts"],
    queryFn: () => getPosts({ page: 1, count: 10, sort: "createdAt", dir: "desc" }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["popular-posts"],
    queryFn: () => getPosts({ page: 1, count: 10, sort: "views", dir: "desc" }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["all-posts"],
    queryFn: () => getPosts({ page: 1, count: 10, sort: "createdAt", dir: "desc" }),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <User size='large' />
        <HydrationBoundary state={dehydratedState}>
          <PostList title='최근 게시글' postCountInRow={5} queryKey='newest-posts' />
          <PostList title='인기 게시글' postCountInRow={5} queryKey='popular-posts' />
          <PostList title='모든 게시글' postCountInRow={5} queryKey='all-posts' />
        </HydrationBoundary>
      </div>
      <Sidebar />
    </div>
  );
};

export default page;
