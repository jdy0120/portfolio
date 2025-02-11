"use client";

import React, { useEffect } from "react";
import { BoderBottom, MenuStyles } from "./Menu.styles";
import { MENU_ITEMS } from "@/shared/constants/menu/menu";
import { usePathname } from "next/navigation";
import { useState } from "react";
const Menu = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<number>(
    MENU_ITEMS.findIndex((item) => item.href === pathname)
  );

  useEffect(() => {
    setActiveItem(
      MENU_ITEMS.findIndex((item) => item.href === pathname)
    );
  }, [pathname]);

  return (
    <MenuStyles.Container>
      {MENU_ITEMS.map((item, index) => (
        <MenuStyles.MenuList key={item.id}>
          <MenuStyles.MenuItemLink href={item.href}>
            <MenuStyles.MenuItemText>
              <span>{item.name}</span>
            </MenuStyles.MenuItemText>
          </MenuStyles.MenuItemLink>
          {activeItem === index && (
            <BoderBottom
              layoutId={`underline`}
              initial={false}
              animate={{ backgroundColor: "black", width: "100%" }}
            />
          )}
        </MenuStyles.MenuList>
      ))}
    </MenuStyles.Container>
  );
};

export default Menu;
