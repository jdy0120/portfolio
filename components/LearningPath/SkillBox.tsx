import React from "react";
import styled from "styled-components";
import Image from "next/image";
import useScrollFadeIn from "../utils/hooks/animation";

const Container = styled.div`
  border: 1px solid #f1f1f1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 30px;
  border-radius: 10px;
  padding: 10px;

  h1 {
    color: ${({ theme }) => theme.title};
  }
`;

const ContainerImages = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1100px) {
    padding: 0;
    margin: 0;
    grid-template-columns: repeat(3, 1fr);
  }

  img {
    border: 2px solid ${({ theme }) => theme.buttonText};
    width: auto;
    height: 10rem;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.buttonColor};

    @media (max-width: 700px) {
      height: 5rem;
      margin: 5px;
    }

    &:hover {
      transition: all 0.3s ease-out;
      transform: translateY(-15%);
    }
  }
`;

interface Props {
  title: string;
  content: { image: StaticImageData; url: string }[];
}

const SkillBox = ({ title, content }: Props) => {
  const fadeInUp = useScrollFadeIn("up", 1, 0);
  return (
    <Container>
      <h1>{title}</h1>
      <ContainerImages {...fadeInUp}>
        {content.map((data, idx) => {
          return (
            <a key={idx} href={data.url}>
              <Image src={data.image} alt="" />
            </a>
          );
        })}
      </ContainerImages>
    </Container>
  );
};

export default SkillBox;
