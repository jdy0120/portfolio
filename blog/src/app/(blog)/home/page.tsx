import React from "react";
import Sidebar from "@/widgets/sidebar/ui/Sidebar";
import User from "@/entities/user/ui/User";
import PostList from "@/entities/post/card/ui/PostList";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        test ci cd
        <User size="large" />
        <PostList title="최근 게시글" postCountInRow={5} />
        <PostList title="인기 게시글" postCountInRow={5} />
        <PostList title="모든 게시글" postCountInRow={5} />
      </div>
      <Sidebar />
    </div>
  );
};

export default page;
