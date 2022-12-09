import React from "react";
import ReactLogoSvg from "public/assets/reactLogo.svg";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;

  @media (max-width: 820px) {
    display: none;
  }
`;

const ReactLogo = styled(ReactLogoSvg)`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  animation: rotate_image 6s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ProfileImage = () => {
  return (
    <Container>
      {/* <Image className="img" src={ReactLogo} alt={`none`}></Image> */}
      <ReactLogo>
        <animate
          attributeName="rx"
          values="0;5;0"
          dur="10s"
          repeatCount="indefinite"
        />
      </ReactLogo>
    </Container>
  );
};

export default ProfileImage;
