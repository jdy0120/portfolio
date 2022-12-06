import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  border: 1px solid #f1f1f1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 30px;
  border-radius: 10px;
  padding: 10px;
`;

const ContainerImages = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  img {
    border: 3px solid #f1f1f1;
    width: auto;
    height: 10rem;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;

    &:hover {
      transition: all 0.3s ease-out;
      transform: translateY(-15%);
    }
  }
`;

interface Props {
  title: string;
  images: StaticImageData[];
}

const SkillBox = ({ title, images }: Props) => {
  return (
    <Container>
      <h1>{title}</h1>
      <ContainerImages>
        {images.map((data) => {
          return (
            <a href="">
              <Image key={String(data)} src={data} alt="" />
            </a>
          );
        })}
      </ContainerImages>
    </Container>
  );
};

export default SkillBox;
