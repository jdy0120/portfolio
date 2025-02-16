import React from "react";
import { PostDetailStyles } from "./PostDetail.styles";
import PostContent from "@/features/content/post/ui/PostContent";
import Comment from "@/features/comment/ui/Comment";

interface PostDetailProps {
  slug: string;
}

const PostDetail = ({ slug }: PostDetailProps) => {
  return (
    <PostDetailStyles.Container>
      <PostContent />
      <Comment />
    </PostDetailStyles.Container>
  );
};

export default PostDetail;
