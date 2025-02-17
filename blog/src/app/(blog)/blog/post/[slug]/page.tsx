import React from "react";
import PostList from "@/entities/post/card/ui/PostList";
import PostDetail from "@/entities/post/detail/ui/PostDetail";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.Container}>
      <PostDetail slug="slug" />

      <div className={styles.PostListWrapper}>
        <PostList title="관련 게시물" postCountInRow={5} />
      </div>
    </div>
  );
};

export default page;
