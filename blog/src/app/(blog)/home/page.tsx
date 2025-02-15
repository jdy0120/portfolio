"use client";

import React from "react";
import { HomePageStyles } from "./page.styles";
import Sidebar from "@/widgets/sidebar/ui/Sidebar";
import User from "@/entities/user/ui/User";
import PostList from "@/entities/post/ui/PostList";

const page = () => {
  return (
    <HomePageStyles.Container>
      <HomePageStyles.Content>
        <User size="large" />
        <PostList title="최근 게시글" />
        <PostList title="인기 게시글" />
        <PostList title="모든 게시글" />
      </HomePageStyles.Content>
      <Sidebar />
    </HomePageStyles.Container>
  );
};

export default page;
