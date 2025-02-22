import React from "react";
import Image from "next/image";
import styles from "./PostImage.module.css";

const PostImage = () => {
  return (
    <div className={styles.Container}>
      <Image
        src="/assets/images/doyeonism_square.png"
        alt="post-image"
        width={100}
        height={60}
        layout="responsive"
        className={styles.Image}
        priority
      />
    </div>
  );
};

export default PostImage;
