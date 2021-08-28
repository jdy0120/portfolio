import React from "react";
import Text from "./Text";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  color: white;
`;

const letter = ["HTML", "CSS", "JavaScript"];

const Header = () => {
  return (
    <HeaderContainer>
      <h1>{"Doyeon은 ["}</h1>
      <Text letter={letter} />
      <h1>{`]을 좋아합니다.`}</h1>
    </HeaderContainer>
  );
};

export default Header;
