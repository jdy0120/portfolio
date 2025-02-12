import React from "react";
import Image from "next/image";
import { LogoStyles } from "./Logo.styles";

const Logo = () => {
  return (
    <LogoStyles.Container href="/">
      <Image
        src="/assets/icons/doysonism_logo_white.svg"
        alt="logo"
        width={32}
        height={32}
        priority
      />
      <LogoStyles.HomePageTitle>Doyeonism</LogoStyles.HomePageTitle>
    </LogoStyles.Container>
  );
};

export default Logo;
