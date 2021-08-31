import Enviroment from "./Enviroment";
import Language from "./Language";
import Library from "./Library";
import React from "react";
import Server from "./Server";
import Tools from "./Tools";
import styled from "styled-components";

const SkillContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  color: white;
`;

const Skill = () => {
  return (
    <SkillContainer>
      <Language />
      <Library />
      <Server />
      <Enviroment />
      <Tools />
    </SkillContainer>
  );
};

export default Skill;
