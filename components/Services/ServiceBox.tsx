import React from "react";
import styled from "styled-components";

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

  h1 {
    margin: 15px;
    font-size: large;
  }

  p {
    margin: 15px;
    text-align: center;
  }
`;

const IconBox = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.buttonColor};
  border-radius: 15px;
  margin: 30px;
`;

interface Props {
  icon: string;
  title: string;
  description: string;
}

const ServiceBox = ({ icon, title, description }: Props) => {
  return (
    <Container>
      <IconBox />
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  );
};

export default ServiceBox;
