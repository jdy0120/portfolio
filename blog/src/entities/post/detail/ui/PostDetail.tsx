import React from "react";
import Wrapper from "@/entities/post/post/wrapper/ui/Wrapper";
import Comment from "@/entities/post/comment/ui/Comment";
import styles from "./PostDetail.module.css";
import User from "@/entities/user/ui/User";

interface PostDetailProps {
  slug: string;
}

const PostDetail = ({ slug }: PostDetailProps) => {
  return (
    <div className={styles.Container}>
      <Wrapper />
      <Comment />
    </div>
  );
};

export default PostDetail;
