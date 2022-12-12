import React from "react";
import styled from "styled-components";
import { articles } from "./atricles";
import ArticleBox from "./ArticleBox";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
  }
`;

const Portfolios = () => {
  return (
    <Container>
      <ArticleContainer>
        {articles.map((article, idx) => {
          return (
            <ArticleBox
              key={idx}
              url={article.url}
              projectName={article.projectName}
              term={article.term}
              img={article.img}
            />
          );
        })}
      </ArticleContainer>
    </Container>
  );
};

export default Portfolios;
