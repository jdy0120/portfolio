import React from "react";
import PostContent from "@/features/content/post/ui/PostContent";
import Comment from "@/features/comment/ui/Comment";
import styles from "./PostDetail.module.css";

interface PostDetailProps {
  slug: string;
}

const PostDetail = ({ slug }: PostDetailProps) => {
  return (
    <div className={styles.Container}>
      <PostContent />
      <Comment />
    </div>
  );
};

export default PostDetail;
