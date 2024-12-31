import React from "react";

import { MENUType } from "../../../../constants/router/menu";
import { MenuItemStyles } from "./menu.styles";
import { usePathname, useRouter } from "next/navigation";
import { DashboardOutlined } from "@ant-design/icons";

interface MenuItemProps {
  menu: MENUType;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActiveChild = (child: MENUType) => {
    return pathname.includes(child.path);
  };

  const moveToChild =
    (child: MENUType) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      router.push(child.path);
    };

  return (
    <MenuItemStyles.Container>
      <MenuItemStyles.Title>{menu.name}</MenuItemStyles.Title>
      {menu.children && (
        <>
          {menu.children.map((child) => (
            <MenuItemStyles.MenuItem
              key={child.key}
              active={isActiveChild(child)}
              onClick={moveToChild(child)}
            >
              <DashboardOutlined width={16} height={16} />
              <MenuItemStyles.MenuItemTitle key={child.key}>
                {child.name}
              </MenuItemStyles.MenuItemTitle>
            </MenuItemStyles.MenuItem>
          ))}
        </>
      )}
    </MenuItemStyles.Container>
  );
};

export default MenuItem;
