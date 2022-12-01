import React from "react";
import ReactLogo from "public/assets/reactLogo.svg";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  .img {
    margin: 0;
    padding: 0;
    width: 75%;
    height: auto;
    animation: rotate_image 6s linear infinite;
    transform-origin: 50% 50%;
  }

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ProfileImage = () => {
  return (
    <Container>
      <Image className="img" src={ReactLogo} alt={`none`}></Image>
    </Container>
  );
};

export default ProfileImage;
