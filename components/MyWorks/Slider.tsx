import React from "react";
import SlideBox from "./SlideBox";
import styled from "styled-components";
import SlideContainer from "./SlideContainer";
const Container = styled.div`
  overflow: hidden;
  margin-top: 15rem;

  @media (max-width: 820px) {
    margin-top: 0;
  }
`;

const Slider = () => {
  return (
    <Container>
      <SlideContainer />
    </Container>
  );
};

export default Slider;
