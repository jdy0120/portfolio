import React from "react";
import LoginCheck from "../../lib/providers/LoginCheck";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  const queryClient = new QueryClient();

  return <LoginCheck>{children}</LoginCheck>;
};

export default layout;
