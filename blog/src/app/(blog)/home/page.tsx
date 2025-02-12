"use client";

import React from "react";
import { HomePageStyles } from "./page.styles";
import Sidebar from "@/widgets/sidebar/ui/Sidebar";
import User from "@/entities/user/ui/User";
import PageMotion from "@/shared/animations/page/page.motion";

const page = () => {
  return (
    <HomePageStyles.Container>
      <PageMotion
        style={{
          flex: 1,
        }}
      >
        <HomePageStyles.Content>
          <User size="large" />
        </HomePageStyles.Content>
      </PageMotion>
      <PageMotion direction="left">
        <Sidebar />
      </PageMotion>
    </HomePageStyles.Container>
  );
};

export default page;
