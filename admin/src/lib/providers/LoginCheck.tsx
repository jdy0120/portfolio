"use client";

import React, { useEffect } from "react";
import { redirect, usePathname } from "next/navigation";
import { useLoginStore } from "../zustand/stores/login.store";
interface LoginCheckProps {
  children: React.ReactNode;
}

const LoginCheck = ({ children }: LoginCheckProps) => {
  const pathname = usePathname();
  const { getState } = useLoginStore();

  const { isLogin } = getState();

  useEffect(() => {
    if (!isLogin && pathname !== "/login") {
      redirect("/login");
    }
  }, [isLogin, pathname]);

  return <>{children}</>;
};

export default LoginCheck;
