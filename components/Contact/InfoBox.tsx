import React from "react";
import styled from "styled-components";

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
`;

const InfoBox = () => {
  return (
    <Container>
      <IconBox></IconBox>
      <Description>
        <h1>{`Address`}</h1>
        <p>{`평동로 23길 16`}</p>
      </Description>
    </Container>
  );
};

export default InfoBox;
