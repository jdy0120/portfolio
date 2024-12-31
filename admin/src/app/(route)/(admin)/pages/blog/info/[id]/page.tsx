"use client";

import React from "react";
import { CreateBlogPageStyles } from "./page.styles";
import { useParams } from "next/navigation";
import { usePostItem } from "../../../../../../../apis/v1/blog/blog.query";
import Content from "./components/content/Content";
import Header from "./components/header/Header";

const page = () => {
  const { id } = useParams();
  const { data: postData } = usePostItem(id as string);

  const headerData = {
    title: postData?.data.title,
    slug: postData?.data.slug,
    categoryId: postData?.data.categoryId,
    status: postData?.data.status,
  };

  return (
    <CreateBlogPageStyles.Container>
      <CreateBlogPageStyles.DescriptionContainer>
        <CreateBlogPageStyles.Title>
          포스트 글 쓰기
        </CreateBlogPageStyles.Title>
        <Header postHeadData={headerData} />
      </CreateBlogPageStyles.DescriptionContainer>
      <CreateBlogPageStyles.ContentContainer>
        <Content />
      </CreateBlogPageStyles.ContentContainer>
    </CreateBlogPageStyles.Container>
  );
};

export default page;
