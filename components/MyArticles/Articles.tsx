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
`;

const ArtivleBoxContainer = styled.div`
  width: 75%;
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

const Articles = () => {
  const [posts, setPosts] = useState<TistoryData[]>();
  const [category, setCategory] = useState("1015842");
  const [responseDate, setResponseDate] = useState(``);
  const getPosts = async () => {
    const response = await fetch(`/api/tistory/posts`);

    const res = await response.json();
    setResponseDate(res.requestData.url);
    // setResponseDate(await response.json());
    // setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <Category category={category} setCategory={setCategory} />
      <p>{responseDate}</p>
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
