import React from "react";
import styled from "styled-components";
import Titles from "./Titles";
import Service from "./Service";

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
`;

const OutContainer = styled.div`
  width: 100%;
  max-width: 2000px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Services = () => {
  return (
    <Body>
      <OutContainer>
        <Container>
          <Titles />
          <Service />
        </Container>
      </OutContainer>
    </Body>
  );
};

export default Services;
