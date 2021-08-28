import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import Project from "./components/project/Project";
import React from "react";
import Skill from "./components/skill/Skill";
import styled from "styled-components";

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  background: black;
`;

function App() {
  return (
    <Container>
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
