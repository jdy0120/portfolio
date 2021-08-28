import React from "react";
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
  return <SkillContainer>{`Skill`}</SkillContainer>;
};

export default Skill;
