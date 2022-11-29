import React from "react";
import { useThemeContext } from "../../context/themeContext";
import styled from "styled-components";
import moonlight from "../../assets/moonlight.png";
import moondark from "../../assets/moondark.png";
import Image from "next/image";

const moon: { [key: string]: StaticImageData } = {
  light: moonlight,
  dark: moondark,
};

const Container = styled.div`
  width: 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 20px;
    height: auto;
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.title};
    border: 1.5px solid ${({ theme }) => theme.title};
    padding: 15px 25px 15px 25px;
    border-radius: 10px;
  }
`;

const Resume = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <Container>
      <div>
        <Image onClick={toggleTheme} src={moon[theme]} alt="" />
      </div>
      <div>
        <button>{`Resume`}</button>
      </div>
    </Container>
  );
};

export default Resume;
