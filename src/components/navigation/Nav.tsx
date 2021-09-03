import styled, { css } from "styled-components";

import React from "react";
import { ThemeColor } from "../../types/type";
import ToggleSwitch from "./ToggleSwitch";
import { themeMode } from "../../_color/ColorProvider";
import { useAppContext } from "../../_providers/AppProviders";

interface Theme {
  theme: ThemeColor;
}

const NavContainer = styled.nav`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  color: ${({ theme }: Theme) => {
    return `${themeMode[theme].fontColor}`;
  }};
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

const ThemeButton = styled.div`
  position: absolute;
  top: 1em;
  right: 2em;
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

  React.useEffect(() => {}, []);
  return (
    <NavContainer theme={themeColor}>
      <NavList>
        <NavButton>{`Header`}</NavButton>
        <NavButton onClick={clickTItle}>{`About`}</NavButton>
        <NavButton>{`Skill`}</NavButton>
        <NavButton>{`Project`}</NavButton>
        <NavButton>{`Profile`}</NavButton>
      </NavList>

      <ThemeButton>
        {`Theme`}
        <br />
        {`Change`}
        <ToggleSwitch theme={themeColor} />
      </ThemeButton>
    </NavContainer>
  );
};

export default Nav;
