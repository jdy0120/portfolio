"use client";

import React from "react";
import styles from "./Wrapper.module.css";
import PostImage from "@/entities/post/image/ui/PostImage";
import Content from "@/entities/post/content/ui/Content";
import { useGetPostItem } from "@/entities/post/detail/apis/post-item/postItem.query";

interface WrapperProps {
  slug: string;
  queryKey: string;
}

const Wrapper = ({ slug, queryKey }: WrapperProps) => {
  const { data: postItemData } = useGetPostItem({ slug, queryKey });

  if (!postItemData?.data) return null;

  const { contentFile, thumbnails = [], attachmentImages = [] } = postItemData.data;

  return (
    <div className={styles.Container}>
      <PostImage thumbnails={thumbnails} />
      <Content contentFile={contentFile} attachmentImages={attachmentImages} />
    </div>
  );
};

export default Wrapper;
