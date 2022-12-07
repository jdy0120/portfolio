import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  transition: all 0.3 ease-out;
  display: flex;
  justify-content: center;

  img {
    width: 350px;
    height: auto;
    border-radius: 10px;
    @media (max-width: 1100px) {
      width: 70%;
    }
  }
`;

interface Props {
  content: {
    image: StaticImageData;
    imageurl: string;
    title: string;
    description: string;
    date: string;
  };
  index: number;
}

const ImageBox = ({ content, index }: Props) => {
  const className = ["left", "mid", "right"][index];
  return (
    <Container className={className}>
      <Image src={content.image} alt={`none`} />
    </Container>
  );
};

export default ImageBox;
