import React from "react";
import PostList from "@/entities/post/card/ui/PostList";
import PostDetail from "@/entities/post/detail/ui/PostDetail";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const slug = await params;
  return (
    <div className={styles.Container}>
      <PostDetail slug={slug.slug} />
      <div className={styles.PostListWrapper}>
        <PostList title='관련 게시물' postCountInRow={5} queryKey='related-posts' />
      </div>
    </div>
  );
};

export default page;
