import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Address from "./Address";

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fbfbfb;
`;

const OutContainer = styled.div`
  width: 100%;
  max-width: 2000px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 820px) {
    flex-direction: column;
    height: auto;
    margin: 3rem 0 3rem;
  }
`;

const Contact = () => {
  return (
    <Body>
      <OutContainer>
        <Container>
          <Form />
          <Address />
        </Container>
      </OutContainer>
    </Body>
  );
};

export default Contact;
