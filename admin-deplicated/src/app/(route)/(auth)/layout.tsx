"use client";

import React from "react";

import { AuthLayoutStyles } from "./layout.styles";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <AuthLayoutStyles.Container>
      {children}
    </AuthLayoutStyles.Container>
  );
};

export default AuthLayout;
