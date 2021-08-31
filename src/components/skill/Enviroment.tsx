import Macimg from "../../_assets/Mac.png";
import React from "react";
import SkillStyle from "./SkillStyle";
import VScodeimg from "../../_assets/VScode.png";
import Windowimg from "../../_assets/Window.png";
import styled from "styled-components";

const Container = styled.article``;

const Enviroment = () => {
  return (
    <Container>
      <h1>{`Enviroment`}</h1>
      <SkillStyle SkillName={"Mac"} icon={Macimg} />
      <SkillStyle SkillName={"Window"} icon={Windowimg} />
      <SkillStyle SkillName={"VScode"} icon={VScodeimg} />
    </Container>
  );
};

export default Enviroment;
