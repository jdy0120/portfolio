import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin: 0 2rem 0 2rem;
    color: ${({ theme }) => theme.title};
    cursor: pointer;
  }
`;

const Menu = () => {
  return (
    <Container>
      <ul>
        <li>{`Services`}</li>
        <li>{`Portfolios`}</li>
        <li>{`Experience`}</li>
        <li>{`Blog`}</li>
        <li>{`...`}</li>
      </ul>
    </Container>
  );
};

export default Menu;
