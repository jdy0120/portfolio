import React from "react";
import { PostListStyles } from "./PostList.styles";
import PostCard from "@/features/postcard/ui/PostCard";

interface PostListProps {
  title: string;
}

const PostList = ({ title }: PostListProps) => {
  return (
    <PostListStyles.Container>
      <PostListStyles.Title>{title}</PostListStyles.Title>
      <PostListStyles.PostList>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostListStyles.PostList>
    </PostListStyles.Container>
  );
};

export default PostList;
