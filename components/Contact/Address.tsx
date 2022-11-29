import React from "react";
import styled from "styled-components";
import InfoBox from "./InfoBox";

const Container = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Address = () => {
  return (
    <Container>
      <InfoBox />
      <InfoBox />
      <InfoBox />
    </Container>
  );
};

export default Address;
