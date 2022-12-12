import React from "react";
import styled from "styled-components";
import Titles from "../Titles/TItle";
import ArticleBox from "./ArticleBox";
import Portfolios from "./Portfolios";

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const OutContainer = styled.div`
  width: 100%;
  max-width: 2000px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const titleData = {
  title: `MY WORKS`,
  description: `Featured Portfolios`,
};

const MyWorks = () => {
  return (
    <Body>
      <OutContainer>
        <Container>
          <Titles title={titleData.title} description={titleData.description} />
          <Portfolios />
        </Container>
      </OutContainer>
    </Body>
  );
};

export default MyWorks;
