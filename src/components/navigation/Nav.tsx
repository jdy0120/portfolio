import styled, { css } from "styled-components";

import React from "react";
import { ThemeColor } from "../../types/type";
import { themeMode } from "../../_color/ColorProvider";
import { useAppContext } from "../../_providers/AppProviders";

const NavContainer = styled.nav`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  color: white;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavButton = styled.li`
  margin: 0 1em 0 1em;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid yellow;
  }
`;

interface Theme {
  theme: ThemeColor;
}

const colorStyle = css<Theme>`
  ${({ theme }: Theme) => {
    const backgroundColor = themeMode[theme].buttonBackground;
    const color = themeMode[theme].fontColor;

    return css`
      background: ${backgroundColor};
      color: ${color};
    `;
  }}
`;

const ThemeButton = styled.button`
  position: absolute;
  top: 2em;
  right: 2em;
  border: none;
  width: 5em;
  height: 3em;

  ${colorStyle}
`;

const Nav = () => {
  const {
    state: { themeColor },
    setTheme,
  } = useAppContext();

  const clickTItle = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const changeTheme = () => {
    const color = themeColor === "Black" ? "White" : "Black";
    setTheme(color);
  };

  React.useEffect(() => {}, []);
  return (
    <NavContainer>
      <NavList>
        <NavButton>{`Header`}</NavButton>
        <NavButton onClick={clickTItle}>{`About`}</NavButton>
        <NavButton>{`Skill`}</NavButton>
        <NavButton>{`Project`}</NavButton>
        <NavButton>{`Profile`}</NavButton>
      </NavList>

      <ThemeButton onClick={changeTheme} theme={themeColor}>
        {themeColor === "Black" ? `Change\nLite` : `Change\nDark`}
      </ThemeButton>
    </NavContainer>
  );
};

export default Nav;
