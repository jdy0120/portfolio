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

interface Props {
  title: string;
  description: string;
}

const Titles = ({ title, description }: Props) => {
  return (
    <Container>
      <Title>
        <div>
          <hr />
        </div>
        <p>{`LEARNING PATH`}</p>
      </Title>
      <h1>{`Education & Skills`}</h1>
    </Container>
  );
};

export default Titles;
