"use client";

import React from "react";
import { PostListStyles } from "./PostList.styles";
import PostCard from "@/features/postcard/ui/PostCard";

interface PostListProps {
  title: string;
  postCountInRow?: number;
}

const PostList = ({ title, postCountInRow = 4 }: PostListProps) => {
  return (
    <PostListStyles.Container>
      <PostListStyles.Title>{title}</PostListStyles.Title>
      <PostListStyles.PostList postCountInRow={postCountInRow}>
        {Array.from({ length: postCountInRow }).map((_, index) => (
          <PostCard
            key={index}
            title="PostCard"
            description="PostCard"
            date="2024-01-01"
            image="/assets/images/doyeonism_square.jpg"
            link="/blog/post/slugname"
          />
        ))}
      </PostListStyles.PostList>
    </PostListStyles.Container>
  );
};

export default PostList;
