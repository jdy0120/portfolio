import React from "react";
import LoginCheck from "../../lib/providers/LoginCheck";
import { QueryClient } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return <LoginCheck>{children}</LoginCheck>;
};

export default layout;
