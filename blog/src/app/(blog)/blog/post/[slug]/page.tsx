"use client";

import React from "react";
import { PostListWrapper, PostPageStyles } from "./page.styles";
import PostList from "@/entities/post/card/ui/PostList";
import PostDetail from "@/entities/post/detail/ui/PostDetail";

const page = () => {
  return (
    <PostPageStyles.Container>
      <PostDetail slug="slug" />

      <PostListWrapper>
        <PostList title="관련 게시물" postCountInRow={5} />
      </PostListWrapper>
    </PostPageStyles.Container>
  );
};

export default page;
