import React from "react";
import Header from "@/widgets/header/ui/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default layout;
