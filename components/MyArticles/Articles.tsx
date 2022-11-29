import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleBox from "./ArticleBox";
import axios from "axios";
import { TistoryData } from "../../types/types";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 13rem;
`;

const sampleData = [
  {
    categoryId: 1015842,
    comments: 0,
    date: new Date("2022-11-28 10:42:54"),
    id: 16,
    postUrl: "https://blog.doyeonism.com/16",
    title: "cra없이 리액트 프로젝트 생성하기 두번째 파일구성 알아보기",
    trackbacks: 0,
    visibility: 20,
  },
  {
    categoryId: 1015842,
    comments: 0,
    date: new Date("2022-11-28 10:42:54"),
    id: 16,
    postUrl: "https://blog.doyeonism.com/16",
    title: "cra없이 리액트 프로젝트 생성하기 두번째 파일구성 알아보기",
    trackbacks: 0,
    visibility: 20,
  },
  {
    categoryId: 1015842,
    comments: 0,
    date: new Date("2022-11-28 10:42:54"),
    id: 16,
    postUrl: "https://blog.doyeonism.com/16",
    title: "cra없이 리액트 프로젝트 생성하기 두번째 파일구성 알아보기",
    trackbacks: 0,
    visibility: 20,
  },
];

const Articles = () => {
  const [posts, setPosts] = useState<TistoryData[]>(sampleData);
  const getPosts = async () => {
    const response = await axios.get(`/api/tistory/posts`);

    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <ArticleBox data={posts[0]} />
      <ArticleBox data={posts[1]} />
      <ArticleBox data={posts[2]} />
    </Container>
  );
};

export default Articles;
