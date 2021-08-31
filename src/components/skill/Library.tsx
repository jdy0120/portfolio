import Expressimg from "../../_assets/Express.png";
import JWTimg from "../../_assets/JWT.png";
import Nodeimg from "../../_assets/Node.png";
import React from "react";
import Reactimg from "../../_assets/React.png";
import SkillStyle from "./SkillStyle";
import Socketimg from "../../_assets/Socket.png";
import styled from "styled-components";

const Container = styled.article``;

const Library = () => {
  return (
    <Container>
      <h1>{`Library/Frameworks`}</h1>
      <SkillStyle SkillName={"React.js"} icon={Reactimg} />
      <SkillStyle SkillName={"Node.js"} icon={Nodeimg} />
      <SkillStyle SkillName={"Express.js"} icon={Expressimg} />
      <SkillStyle SkillName={"Socket.io"} icon={Socketimg} />
      <SkillStyle SkillName={"JWT"} icon={JWTimg} />
    </Container>
  );
};

export default Library;
