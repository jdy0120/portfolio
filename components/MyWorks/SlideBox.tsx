import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../assets/logo.jpg";

const Container = styled.div`
  width: 30vh;
  border: 1px solid red;
  margin: 0 30px 0 30px;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  background-color: white;

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
  }
`;

const TitleContainer = styled.div`
  margin: 20px 20px 20px 20px;
`;

const Title = styled.h1``;

const SpecContainer = styled.div`
  display: flex;
`;

const Spec = styled.p`
  margin: 10px;
  padding: 5px;
  background-color: #f1f1f1;
  border-radius: 5px;
  opacity: 70%;
  transition: all 0.25s ease-out;
  cursor: pointer;

  &:hover {
    opacity: 100%;
  }
`;

const SlideBox = () => {
  return (
    <Container>
      <Image src={Logo} alt={`logo`} />
      <TitleContainer>
        <Title>Agency Website</Title>
        <SpecContainer>
          <Spec>{`wordpress`}</Spec>
          <Spec>{`Read more...`}</Spec>
        </SpecContainer>
      </TitleContainer>
    </Container>
  );
};

export default SlideBox;
