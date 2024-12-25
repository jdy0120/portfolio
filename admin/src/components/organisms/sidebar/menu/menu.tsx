import React from "react";

import { MENUType } from "../../../../constants/router/menu";
import { MenuItemStyles } from "./menu.styles";

interface MenuItemProps {
  menu: MENUType;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  return (
    <MenuItemStyles.Container>{menu.name}</MenuItemStyles.Container>
  );
};

export default MenuItem;
