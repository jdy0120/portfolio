import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Resume from "./Resume";
import LogoDark from "public/assets/logo.png";
import LogoLight from "public/assets/logo_negative.png";
import Image from "next/image";
import { useThemeContext } from "../../context/themeContext";

const logo: { [key: string]: StaticImageData } = {
  light: LogoLight,
  dark: LogoDark,
};

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
  align-items: center;
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 3rem;
    height: 3rem;
  }
`;

const MenuContainer = styled.div`
  @media (max-width: 820px) {
    display: none;
  }
`;

const HambergerMenuContainer = styled.div`
  display: none;
  @media (max-width: 820px) {
    display: flex;
  }
`;

const Nav = () => {
  const { theme } = useThemeContext();

  return (
    <Body>
      <OutContainer>
        <Container>
          <LogoContainer>
            <a href="#">
              <Image src={logo[theme]} alt={`logo`} priority />
            </a>
          </LogoContainer>
          <MenuContainer>
            <Menu />
          </MenuContainer>
          <HambergerMenuContainer></HambergerMenuContainer>
          <Resume />
        </Container>
      </OutContainer>
    </Body>
  );
};

export default Nav;
