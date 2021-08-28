import React from "react";
import Text from "./Text";
import styled from "styled-components";

const AboutContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  color: white;
`;

const Content = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid gray;
  border-radius: 5px;
  width: 80%;
  height: 80%;
  padding: 1em;
`;

const Title = styled.h1`
  position: absolute;
  top: 1em;
  font-size: 2em;
`;

const TextContent = styled.div`
  width: 70%;
`;

const About = () => {
  return (
    <AboutContainer>
      <Content>
        <TextContent>
          <Title>{`ABOUT`}</Title>
          <Text />
        </TextContent>
      </Content>
    </AboutContainer>
  );
};

export default About;
