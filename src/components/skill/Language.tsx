import CSSimg from "../../_assets/CSS.png";
import HTMLimg from "../../_assets/HTML.png";
import JavaScriptimg from "../../_assets/JavaScript.png";
import Javaimg from "../../_assets/Java.png";
import Pythonimg from "../../_assets/Python.png";
import React from "react";
import SkillStyle from "./SkillStyle";
import TypeScriptimg from "../../_assets/TypeScript.png";
import styled from "styled-components";

const Container = styled.article``;

const Language = () => {
  return (
    <Container>
      <h1>{"Language"}</h1>
      <SkillStyle SkillName={"HTML"} icon={HTMLimg} />
      <SkillStyle SkillName={"CSS"} icon={CSSimg} />
      <SkillStyle SkillName={"JavaScript"} icon={JavaScriptimg} />
      <SkillStyle SkillName={"TypeScript"} icon={TypeScriptimg} />
      <SkillStyle SkillName={"Python"} icon={Pythonimg} />
      <SkillStyle SkillName={"Java"} icon={Javaimg} />
    </Container>
  );
};

export default Language;
