import React from "react";
import { TistoryData } from "../../types/types";
import styled from "styled-components";
import useScrollFadeIn from "../utils/hooks/animation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 820px) {
    flex-direction: column;
    margin-left: 0px;
  }
`;

const TitleContainer = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  padding: 20px;
  margin: 0 0 20px 0;
  transition: all 0.4s;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  h1 {
    color: #232e35;
    font-size: 1.2rem;
    margin: 0 0 20px 0;
  }

  #date {
    width: 7rem;
    background-color: #f1f1f1;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    opacity: 70%;
  }

  &:hover {
    cursor: pointer;
    background-color: #1e1e1e;
  }

  &:hover h1 {
    color: #f1f1f1;
  }

  @media (max-width: 820px) {
    width: 100%;
    flex-direction: column;
    margin: 0 0 10px 0;

    h1 {
      font-size: 15px;
    }
  }
`;

interface Props {
  posts: TistoryData[] | undefined;
}

const ArticleBox = ({ posts }: Props) => {
  const fadeInUp = useScrollFadeIn("up", 1, 0);
  return (
    <Container {...fadeInUp}>
      {posts?.map((data, idx) => {
        if (idx > 5) {
          return;
        }
        const date = new Date(data.date);
        return (
          <a href={data.postUrl} key={data.id}>
            <TitleContainer>
              <h1>{data.title}</h1>
              <div id={`date`}>
                <p>{`${date.getFullYear()}.${
                  date.getMonth() + 1
                }.${date.getDate()}`}</p>
              </div>
            </TitleContainer>
          </a>
        );
      })}
    </Container>
  );
};

export default ArticleBox;
