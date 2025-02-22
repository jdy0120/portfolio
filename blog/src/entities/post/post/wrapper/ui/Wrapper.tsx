import React from "react";
import styles from "./Wrapper.module.css";
import PostImage from "@/entities/post/image/ui/PostImage";
import Content from "@/entities/post/content/ui/Content";

const Wrapper = () => {
  return (
    <div className={styles.Container}>
      <PostImage />
      <Content />
    </div>
  );
};

export default Wrapper;
