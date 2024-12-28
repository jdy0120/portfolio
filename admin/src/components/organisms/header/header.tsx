import React from "react";

import { HeaderStyles } from "./header.styles";

const Header = () => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Breadcrumb>Dashboards</HeaderStyles.Breadcrumb>
    </HeaderStyles.Container>
  );
};

export default Header;
