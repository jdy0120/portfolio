import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  margin: 20px; ;
`;

const IconBox = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.buttonColor};
  border-radius: 10px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-weight: bold;
    font-size: 1.7rem;
  }

  p {
    font-weight: normal;
    font-size: 1.2rem;
  }
  @media (max-width: 820px) {
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
  }
`;

interface Props {
  icon: StaticImageData;
  title: string;
  description: string;
}

const InfoBox = ({ icon, title, description }: Props) => {
  return (
    <Container>
      <IconBox>
        <Image src={icon} alt={`icon`}></Image>
      </IconBox>
      <Description>
        <h1>{title}</h1>
        <p>{description}</p>
      </Description>
    </Container>
  );
};

export default InfoBox;
