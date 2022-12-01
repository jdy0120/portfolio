import React from "react";
import { TistoryData } from "../../types/types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  a {
    text-decoration: none;
    color: black;
  }
`;

const TitleContainer = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  padding: 20px;
  margin: 0 0 20px 0;
  transition: all 0.4s;
  background-color: white;

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
`;

interface Props {
  posts: TistoryData[] | undefined;
}

const ArticleBox = ({ posts }: Props) => {
  return (
    <Container>
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
