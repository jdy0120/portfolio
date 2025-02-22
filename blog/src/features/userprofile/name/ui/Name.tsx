import React from "react";
import { NameStyles } from "./Name.styles";

interface NameProps {
  size?: "small" | "medium" | "large";
}

const Name = ({ size = "large" }: NameProps) => {
  return <NameStyles size={size}>Doyeonism</NameStyles>;
};

export default Name;
