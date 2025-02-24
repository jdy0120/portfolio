import React from "react";
import Image from "next/image";

import { PorfileStyles, SidebarStyles } from "./sidebar.styles";
import MENU from "../../../constants/router/menu";
import MenuItem from "./menu/menu";

const Sidebar = () => {
  return (
    <SidebarStyles.Container>
      <PorfileStyles.Profile>
        <PorfileStyles.Wrapper>
          <Image
            src="/assets/logos/logo.png"
            alt="logo"
            width={24}
            height={24}
          />
          <PorfileStyles.Name>Doyeonism</PorfileStyles.Name>
        </PorfileStyles.Wrapper>
      </PorfileStyles.Profile>
      <SidebarStyles.Menu>
        {MENU.map((menu) => (
          <MenuItem key={menu.key} menu={menu} />
        ))}
      </SidebarStyles.Menu>
    </SidebarStyles.Container>
  );
};

export default Sidebar;
