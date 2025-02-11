"use client";

import React from "react";
import { HeaderStyles } from "./Header.styles";
import Logo from "../components/logo/Logo";
import Menu from "../components/menu/Menu";
const Header = () => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.LeftWrapper>
        <Logo />
        <Menu />
      </HeaderStyles.LeftWrapper>
      <HeaderStyles.RightWrapper></HeaderStyles.RightWrapper>
    </HeaderStyles.Container>
  );
};

export default Header;
