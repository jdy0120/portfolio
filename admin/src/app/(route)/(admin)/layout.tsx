"use client";

import React from "react";
import { AdminLayoutStyles } from "./layout.styles";
import Sidebar from "../../../components/organisms/sidebar/sidebar";
import Header from "../../../components/organisms/header/header";
interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <AdminLayoutStyles.Container>
      <Sidebar />
      <AdminLayoutStyles.Body>
        <Header />
        <AdminLayoutStyles.Content>
          {children}
        </AdminLayoutStyles.Content>
      </AdminLayoutStyles.Body>
    </AdminLayoutStyles.Container>
  );
};

export default layout;
