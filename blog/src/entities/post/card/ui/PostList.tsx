"use client";

import React from "react";
import { PostListStyles } from "./PostList.styles";
import PostCard from "@/features/postcard/ui/PostCard";
import dayjs from "dayjs";
import { useGetPosts } from "@/app/(blog)/home/apis/posts";
import { Skeleton } from "../components";

const storageBaseUrl = process.env.NEXT_PUBLIC_STORAGE_BASE_URL;
interface PostListProps {
  title: string;
  postCountInRow?: number;
  queryKey: string;
  isInfinite?: boolean;
}

const PostList = ({ title, postCountInRow = 4, queryKey, isInfinite = false }: PostListProps) => {
  const { data: posts, isLoading } = useGetPosts({
    page: 1,
    count: postCountInRow,
    sort: "createdAt",
    dir: "desc",
    queryKey,
    isInfinite,
  });

  if (isLoading) {
    return (
      <PostListStyles.Container>
        <PostListStyles.Title>{title}</PostListStyles.Title>
        <PostListStyles.PostList postCountInRow={postCountInRow}>
          {Array.from({ length: postCountInRow }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </PostListStyles.PostList>
      </PostListStyles.Container>
    );
  }

  return (
    <PostListStyles.Container>
      <PostListStyles.Title>{title}</PostListStyles.Title>
      <PostListStyles.PostList postCountInRow={postCountInRow}>
        {posts?.data
          .slice(0, postCountInRow)
          .map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              description={post.description}
              date={dayjs(post.createdAt).format("YYYY-MM-DD")}
              image={
                post.thumbnails?.[0]?.path
                  ? `${storageBaseUrl}/${post.thumbnails?.[0]?.path}`
                  : "/assets/placeholders/250x192.svg"
              }
              link={`/blog/post/${post.slug}`}
            />
          ))}
      </PostListStyles.PostList>
    </PostListStyles.Container>
  );
};

export default PostList;
