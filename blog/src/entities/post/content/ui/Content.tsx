import React from "react";
import styles from "./Content.module.css";
import Author from "@/features/post/author/ui/Author";
import Tags from "@/features/post/tags/ui/Tags";
import Profile from "@/features/post/profile/Profile";

const Content = () => {
  return (
    <div className={styles.Container}>
      <Author />
      <Tags />

      <Profile />
    </div>
  );
};

export default Content;
