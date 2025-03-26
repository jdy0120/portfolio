"use client";

import React from "react";
import styles from "./Wrapper.module.css";
import PostImage from "@/entities/post/image/ui/PostImage";
import Content from "@/entities/post/content/ui/Content";
import { useQuery } from "@tanstack/react-query";

interface WrapperProps {
  queryKey: string;
}

const Wrapper = ({ queryKey }: WrapperProps) => {
  const { data: postItemData } = useQuery({ queryKey: [queryKey] });

  return (
    <div className={styles.Container}>
      <PostImage />
      <Content />
    </div>
  );
};

export default Wrapper;
