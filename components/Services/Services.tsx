import React from "react";
import styled from "styled-components";
import Titles from "../Titles/TItle";
import Service from "./Service";

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.25s;
  background-color: ${({ theme }) => theme.secondary};
`;

const OutContainer = styled.div`
  width: 100%;
  max-width: 2000px;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const titleData = {
  title: `SERVICES`,
  description: `Specialized in`,
};

const Services = () => {
  return (
    <Body>
      <OutContainer>
        <Container>
          <Titles title={titleData.title} description={titleData.description} />
          <Service />
        </Container>
      </OutContainer>
    </Body>
  );
};

export default Services;
