import React from "react";
import SlideBox from "./SlideBox";
import styled from "styled-components";
import SlideContainer from "./SlideContainer";
const Container = styled.div`
  overflow: hidden;
  margin-top: 15rem;
`;

const Slider = () => {
  return (
    <Container>
      <SlideContainer />
    </Container>
  );
};

export default Slider;
