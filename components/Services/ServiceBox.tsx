import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vh;
  height: 30vh;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (max-width: 820px) {
    width: 95%;
    height: auto;
    margin: 10px 0 10px;
    flex-direction: row;
    justify-content: center;
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

  @media (max-width: 820px) {
    margin: 0;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 15px;
    font-size: large;
  }

  p {
    margin: 15px;
    text-align: center;
  }
  @media (max-width: 820px) {
    h1 {
      margin: 0;
    }
    p {
      padding: 0;
    }
  }
`;

interface Props {
  icon: StaticImageData;
  title: string;
  description: string;
}

const ServiceBox = ({ icon, title, description }: Props) => {
  return (
    <Container>
      <IconBox>
        <Image src={icon} alt={`none`} />
      </IconBox>
      <TitleContainer>
        <h1>{title}</h1>
        <p>{description}</p>
      </TitleContainer>
    </Container>
  );
};

export default ServiceBox;
