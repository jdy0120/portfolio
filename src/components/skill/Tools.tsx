import Gitimg from "../../_assets/Git.png";
import Jeplinimg from "../../_assets/Jeplin.png";
import React from "react";
import SkillStyle from "./SkillStyle";
import Slackimg from "../../_assets/Slack.png";
import styled from "styled-components";

const Container = styled.article``;

const Tools = () => {
  return (
    <Container>
      <h1>{`Tools`}</h1>
      <SkillStyle SkillName={"Git"} icon={Gitimg} />
      <SkillStyle SkillName={"Slack"} icon={Slackimg} />
      <SkillStyle SkillName={"Jeplin"} icon={Jeplinimg} />
    </Container>
  );
};

export default Tools;
