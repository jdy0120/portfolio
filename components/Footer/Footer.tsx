import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const OutContainer = styled.div`
  width: 100%;
  max-width: 2000px;
`;

const Container = styled.footer`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.title};
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const Footer = () => {
  return (
    <Body>
      <OutContainer>
        <Container>
          <div>
            <IconContainer>
              <Image src={``} alt={`깃허브`}></Image>
              <Image src={``} alt={`블로그`}></Image>
              <Image src={``} alt={`유튜브`}></Image>
            </IconContainer>
            <p>Copyright © 2022 doyeon</p>
            <address>
              Contact webmaster for more information. 010-9489-9904
            </address>
          </div>
        </Container>
      </OutContainer>
    </Body>
  );
};

export default Footer;
