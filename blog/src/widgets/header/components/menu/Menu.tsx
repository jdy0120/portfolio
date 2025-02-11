import React from "react";
import { MenuStyles } from "./Menu.styles";
import { MENU_ITEMS } from "@/shared/constants/menu/menu";

const Menu = () => {
  return (
    <MenuStyles.Container>
      {MENU_ITEMS.map((item) => (
        <MenuStyles.MenuItemLink key={item.id} href={item.href}>
          <MenuStyles.MenuItemText>
            <span>{item.name}</span>
          </MenuStyles.MenuItemText>
        </MenuStyles.MenuItemLink>
      ))}
    </MenuStyles.Container>
  );
};

export default Menu;
