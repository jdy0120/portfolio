"use client";

import React from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useLoginStore } from "../zustand/stores/login.store";
interface LoginCheckProps {
  children: React.ReactNode;
}

const LoginCheck = ({ children }: LoginCheckProps) => {
  const pathname = usePathname();
  const { getState } = useLoginStore();

  const { isLogin } = getState();

  if (!isLogin && pathname !== "/login") {
    redirect("/login");
  }

  return <>{children}</>;
};

export default LoginCheck;
