import React from "react";
import styled from "styled-components";
import Titles from "./Titles";

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
const CareerPath = () => {
  return (
    <Body>
      <OutContainer>
        <Titles />
        CareerPath
      </OutContainer>
    </Body>
  );
};

export default CareerPath;
