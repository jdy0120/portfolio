import styled from "@emotion/styled";
import Image from "next/image";

const AvatarStyles = {
  Container: styled.div``,

  Image: styled(Image)`
    object-fit: cover;
    border-radius: 50%;
  `,
};

export { AvatarStyles };
