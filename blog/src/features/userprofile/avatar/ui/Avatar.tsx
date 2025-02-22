import React from "react";
import { AvatarStyles } from "./Avatar.styles";

interface AvatarProps {
  size: "small" | "medium" | "large";
}

const Avatar = ({ size }: AvatarProps) => {
  return (
    <AvatarStyles.Container>
      <AvatarStyles.Image
        src="/assets/images/doyeonism_square.jpg"
        alt="avatar"
        width={size === "small" ? 32 : size === "medium" ? 48 : 96}
        height={size === "small" ? 32 : size === "medium" ? 48 : 96}
        priority
      />
    </AvatarStyles.Container>
  );
};

export default Avatar;
