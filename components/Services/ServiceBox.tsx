import React from "react";
import styled from "styled-components";
import Image from "next/image";
import useScrollFadeIn from "../utils/hooks/animation";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 30vh;
  height: 30vh;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (max-width: 853px) {
    width: 95%;
    height: auto;
    margin: 10px 0 10px;
    flex-direction: row;
    justify-content: start;

    padding: 0%;
    padding: 10px;
  }
`;

const IconBox = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.buttonColor};
  border-radius: 15px;
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 853px) {
    margin: 0;
    width: 64px;
    height: 64px;
    padding: 10px;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    margin: 15px;
    font-size: large;
  }

  p {
    margin: 15px;
    text-align: center;
  }
  @media (max-width: 853px) {
    h1 {
      margin: 15px;
      text-align: start;
    }
    p {
      padding: 0;
      text-align: start;
    }
  }
`;

interface Props {
  icon: StaticImageData;
  title: string;
  description: string;
  url: string | undefined;
}

const ServiceBox = ({ icon, title, description, url }: Props) => {
  const fadeinUp = useScrollFadeIn("up", 1, 0);
  return (
    <Container {...fadeinUp}>
      <IconBox>
        <a href={url}>
          <Image src={icon} alt={`none`} />
        </a>
      </IconBox>
      <TitleContainer>
        <a href={url}>
          <h1>{title}</h1>
          <p>{description}</p>
        </a>
      </TitleContainer>
    </Container>
  );
};

export default ServiceBox;
