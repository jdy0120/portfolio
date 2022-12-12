import React from "react";
import { useThemeContext } from "../../context/themeContext";
import styled from "styled-components";
import moonlight from "public/assets/moonlight.png";
import Sum from "public/assets/Frame_negative.png";
import Image from "next/image";

const moon: { [key: string]: StaticImageData } = {
  light: moonlight,
  dark: Sum,
};

const Container = styled.div`
  width: 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.title};
    border: 1.5px solid ${({ theme }) => theme.title};
    padding: 15px 25px 15px 25px;
    border-radius: 10px;
    cursor: pointer;
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
        <a href="https://drive.google.com/file/d/1MkZ69b5uC6QmmlrI5lazq8CzucZNcpAb/view?usp=sharing">
          <button>{`Resume`}</button>
        </a>
      </div>
    </Container>
  );
};

export default Resume;
