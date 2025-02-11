import Info from "@/features/userprofile/info/ui/Info";
import Links from "@/features/userprofile/links/ui/Links";
import Name from "@/features/userprofile/name/ui/Name";
import Avatar from "@/features/userprofile/avatar/ui/Avatar";
import React from "react";
import { UserStyles } from "./User.styles";

interface UserProps {
  size: "small" | "medium" | "large";
}

const User = ({ size }: UserProps) => {
  return (
    <UserStyles.Container>
      <Avatar size={size} />
      <UserStyles.TitleWrapper>
        <Name />
        <Info />
        <Links />
      </UserStyles.TitleWrapper>
    </UserStyles.Container>
  );
};

export default User;
