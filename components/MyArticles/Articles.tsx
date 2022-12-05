import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleBox from "./ArticleBox";
import axios from "axios";
import { TistoryData } from "../../types/types";
import Category from "./Category";

const Container = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 820px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ArtivleBoxContainer = styled.div`
  width: 75%;
  @media (max-width: 820px) {
    width: 100%;
  }
`;

// const sampleData = [
//   {
//     categoryId: "1015842",
//     comments: "0",
//     date: "2022-11-28 10:42:54",
//     id: "16",
//     postUrl: "https://blog.doyeonism.com/16",
//     title: "cra없이 리액트 프로젝트 생성하기 두번째 파일구성 알아보기",
//     trackbacks: "0",
//     visibility: "20",
//   },
//   {
//     categoryId: "1015842",
//     comments: "0",
//     date: "2022-11-28 10:42:54",
//     id: "16",
//     postUrl: "https://blog.doyeonism.com/16",
//     title: "cra없이 리액트 프로젝트 생성하기 두번째 파일구성 알아보기",
//     trackbacks: "0",
//     visibility: "20",
//   },
//   {
//     categoryId: "1015842",
//     comments: "0",
//     date: "2022-11-28 10:42:54",
//     id: "16",
//     postUrl: "https://blog.doyeonism.com/16",
//     title: "cra없이 리액트 프로젝트 생성하기 두번째 파일구성 알아보기",
//     trackbacks: "0",
//     visibility: "20",
//   },
// ];

const requestData = {
  url: `https://www.tistory.com/apis/post/list?`,
  access_token: process.env.NEXT_PUBLIC_TISTORY_ACCESSTOKEN,
  blogName: `doyeonism`,
  output: `json`,
  page: `3`,
};

const getAccessToken = async (page: number): Promise<[]> => {
  const res = await axios.get(
    `${requestData.url}access_token=${requestData.access_token}&output=${requestData.output}&blogName=${requestData.blogName}&page=${page}`
  );

  return res.data.tistory.item.posts;
};

const Articles = () => {
  const [posts, setPosts] = useState<TistoryData[]>();
  const [category, setCategory] = useState("1015842");

  const getPosts = async () => {
    const itemList: [] = [];
    let i = 1;
    while (true) {
      const response = await getAccessToken(i);
      if (!response) {
        break;
      }
      itemList.push(...response);

      i += 1;
    }
    setPosts(itemList);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <Category category={category} setCategory={setCategory} />
      <ArtivleBoxContainer>
        <ArticleBox
          posts={posts?.filter((data) => {
            return data.categoryId === category;
          })}
        />
      </ArtivleBoxContainer>
    </Container>
  );
};

export default Articles;
