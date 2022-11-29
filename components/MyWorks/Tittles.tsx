import React from "react";
import styled from "styled-components";
const Container = styled.div`
  h1 {
    color: ${({ theme }) => theme.title};
    font-size: 2.5rem;
    letter-spacing: 5px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  hr {
    width: 1rem;
    border: 1px solid ${({ theme }) => theme.title};
  }

  p {
    margin: 0 10px 0 10px;
    color: ${({ theme }) => theme.subTitle};
    font-weight: bold;
    letter-spacing: 10px;
  }
`;

const Titles = () => {
  return (
    <Container>
      <Title>
        <div>
          <hr />
        </div>
        <p>{`MY WORKS`}</p>
      </Title>
      <h1>{`Featured Portfolios`}</h1>
    </Container>
  );
};

export default Titles;
