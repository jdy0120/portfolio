import React from "react";
import styled from "styled-components";

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

const ThemeButton = styled.button`
  position: absolute;
  top: 2em;
  right: 2em;
`;

const Nav = () => {
  const clickTItle = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <NavContainer>
      <NavList>
        <NavButton>{`Header`}</NavButton>
        <NavButton onClick={clickTItle}>{`About`}</NavButton>
        <NavButton>{`Skill`}</NavButton>
        <NavButton>{`Project`}</NavButton>
        <NavButton>{`Profile`}</NavButton>
      </NavList>

      <ThemeButton>{"Dark"}</ThemeButton>
    </NavContainer>
  );
};

export default Nav;
