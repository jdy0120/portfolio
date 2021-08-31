import Firebaseimg from "../../_assets/Firebase.png";
import GCPimg from "../../_assets/GCP.png";
import MySQLimg from "../../_assets/MySQL.png";
import React from "react";
import SkillStyle from "./SkillStyle";
import styled from "styled-components";

const Container = styled.article``;
const Server = () => {
  return (
    <Container>
      <h1>{`Server`}</h1>
      <SkillStyle SkillName={"Firebase"} icon={Firebaseimg} />
      <SkillStyle SkillName={"GCP"} icon={GCPimg} />
      <SkillStyle SkillName={"MySQL"} icon={MySQLimg} />
    </Container>
  );
};

export default Server;
