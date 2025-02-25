import React from "react";
import LoginCheck from "../../lib/providers/LoginCheck";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return <LoginCheck>{children}</LoginCheck>;
};

export default layout;
