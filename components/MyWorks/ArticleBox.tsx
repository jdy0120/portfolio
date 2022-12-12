import React from "react";
import styled from "styled-components";
import Image from "next/image";

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background-color: ${({ theme }) => theme.buttonColor};
  opacity: 0%;
  font-size: 1rem;
  color: ${({ theme }) => theme.buttonText};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 850px) {
    opacity: 70%;
    font-size: 10px;
  }
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 5px;

  img {
    width: 40vw;
    height: auto;
    z-index: 2;

    @media (max-width: 850px) {
      width: 90vw;
    }
  }

  span {
    z-index: 1;
    position: absolute;
    background-color: red;
    transition: all 0.5s;

    &:nth-child(1) {
      left: 0;
      top: 10px;
      width: 0;
      height: 3px;
    }
    &:nth-child(2) {
      right: 10px;
      top: 0;
      width: 3px;
      height: 0;
    }
    &:nth-child(3) {
      right: 0;
      bottom: 10px;
      width: 0;
      height: 3px;
    }
    &:nth-child(4) {
      left: 10px;
      bottom: 0;
      width: 3px;
      height: 0;
    }
  }

  &:hover {
    span:nth-child(1) {
      width: 100%;
    }
    span:nth-child(2) {
      height: 100%;
    }
    span:nth-child(3) {
      width: 100%;
    }
    span:nth-child(4) {
      height: 100%;
    }

    img {
      transition: all 0.5s;
      transform: scale(1.3);
    }

    ${ContentContainer} {
      transition: all 0.5s;
      opacity: 85%;
    }
  }

  @media (max-width: 850px) {
    span:nth-child(1) {
      width: 100%;
    }
    span:nth-child(2) {
      height: 100%;
    }
    span:nth-child(3) {
      width: 100%;
    }
    span:nth-child(4) {
      height: 100%;
    }
  }
`;

interface Props {
  url: string;
  projectName: string;
  term: string;
  img: StaticImageData;
}

const ArticleBox = ({ url, projectName, term, img }: Props) => {
  return (
    <Container>
      <a href={url}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Image src={img} alt="project"></Image>
        <ContentContainer>
          <div>
            <h1>{projectName}</h1>
            <p>{term}</p>
          </div>
        </ContentContainer>
      </a>
    </Container>
  );
};

export default ArticleBox;
