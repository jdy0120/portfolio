import styled, { css } from "styled-components";

import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import Project from "./components/project/Project";
import React from "react";
import Skill from "./components/skill/Skill";
import { ThemeColor } from "./types/type";
import { themeMode } from "./_color/ColorProvider";
import { useAppContext } from "./_providers/AppProviders";

interface Color {
  theme: ThemeColor;
}

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  background: ${({ theme }: Color) => {
    const backgroundColor = themeMode[theme].backgroundColor;
    return `
    ${backgroundColor}
    `;
  }};
`;

function App() {
  const {
    state: { themeColor },
  } = useAppContext();
  return (
    <Container theme={themeColor}>
      <Nav />
      <Header />
      <About />
      <Skill />
      <Project />
      <Footer />
    </Container>
  );
}

export default App;
