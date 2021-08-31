import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  background-color: gray;
  color: white;
`;

const Content = styled.section`
  background: black;
  border: 2px solid black;
  border-radius: 5px;
  width: 520px;
  height: 80%;
`;

const NamContainer = styled.div``;

const Name = styled.h1`
  font-size: 2em;
  display: inline-block;
  margin: 0;
`;

const EName = styled.h1`
  font-size: 1em;
  display: inline-block;
  margin: 0;
`;

const Job = styled.p`
  margin: 0;
  padding: 5px;
  background-color: #12114f;
  display: inline-block;
`;

const Detail = styled.p``;

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <NamContainer>
          <Name>{`조도연`}</Name>
          <EName>{`Jack Dawson`}</EName>
        </NamContainer>
        <Job>{`Web FrontEnd Developer`}</Job>
        <Detail>{`jdy0120120@gmail.com `}</Detail>
        <Detail>{`010-9489-9904`}</Detail>
        <Detail>{`github.com/jdy0120`}</Detail>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
