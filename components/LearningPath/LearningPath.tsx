import React from "react";
import Titles from "../Titles/TItle";
import Skills from "./Skills";
import styled from "styled-components";

const Body = styled.div`
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const OutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 2000px;
`;

const Container = styled.div`
  /* width: 100%; */
`;

const titleData = {
  title: `LEARNING PATH`,
  description: `Education & Skills`,
};

const LearningPath = () => {
  return (
    <Body>
      <OutContainer>
        <Container>
          <Titles title={titleData.title} description={titleData.description} />
          <Skills />
        </Container>
      </OutContainer>
    </Body>
  );
};

export default LearningPath;
