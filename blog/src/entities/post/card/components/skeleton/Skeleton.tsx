import React from "react";
import styles from "./Skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles["skeleton-thumbnail"]}></div>
      <div className={styles["skeleton-title"]}></div>
      <div className={styles["skeleton-description"]}></div>
    </div>
  );
};

export { Skeleton };
