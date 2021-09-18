import React from "react";
import Slider from "./Slider";
import styled from "styled-components";

const ProjectContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  color: white;
`;

const Project = () => {
  return (
    <ProjectContainer>
      <Slider />
    </ProjectContainer>
  );
};

export default Project;
