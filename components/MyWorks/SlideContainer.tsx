import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SlideBox from "./SlideBox";
const Container = styled.div`
  float: left;
  display: flex;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
`;

const SlideButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.buttonText};
  opacity: 70%;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.25s ease-in-out;
  &:hover {
    opacity: 100%;
  }
`;

const TOTAL_SLIDES = 1;

const SlideContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current != null) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide * 3}0%)`;
    }
  }, [currentSlide]);
  return (
    <>
      <ButtonContainer>
        <SlideButton onClick={PrevSlide}>{`Prev`}</SlideButton>
        <SlideButton onClick={NextSlide}>{`Next`}</SlideButton>
      </ButtonContainer>

      <Container ref={slideRef}>
        <SlideBox />
        <SlideBox />
        <SlideBox />
        <SlideBox />
        <SlideBox />
        <SlideBox />
      </Container>
    </>
  );
};

export default SlideContainer;
