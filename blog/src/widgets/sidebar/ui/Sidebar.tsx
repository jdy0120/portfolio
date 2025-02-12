import React from "react";
import { SidebarStyles } from "./Sidebar.styles";
import PageMotion from "@/shared/animations/page/page.motion";
const Sidebar = () => {
  return (
    <PageMotion direction="left">
      <SidebarStyles.Container>
        <SidebarStyles.Content>Sidebar</SidebarStyles.Content>
      </SidebarStyles.Container>
    </PageMotion>
  );
};

export default Sidebar;
