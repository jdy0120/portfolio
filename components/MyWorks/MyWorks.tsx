import React from "react";
import styled from "styled-components";
import Titles from "./Tittles";
import Slider from "./Slider";
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InnerContainer = styled.div`
  position: relative;
`;

const MyWorks = () => {
  return (
    <Body>
      <OutContainer>
        <Container>
          <InnerContainer>
            <Titles />
            <Slider />
          </InnerContainer>
        </Container>
      </OutContainer>
    </Body>
  );
};

export default MyWorks;
