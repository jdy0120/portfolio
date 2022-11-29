import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Resume from "./Resume";

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const OutContainer = styled.div`
  width: 100%;
  max-width: 2000px;
`;

const Container = styled.header`
  margin: 2rem 0 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Nav = () => {
  return (
    <Body>
      <OutContainer>
        <Container>
          <h1>{`Logo`}</h1>
          <Menu />
          <Resume />
        </Container>
      </OutContainer>
    </Body>
  );
};

export default Nav;
