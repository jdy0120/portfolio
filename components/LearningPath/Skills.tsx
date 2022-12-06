import React from "react";
import styled from "styled-components";
import SkillBox from "./SkillBox";
import web3 from "public/assets/3web.png";
import reactlogo from "public/assets/react.png";
import reduxlogo from "public/assets/redux.png";
import sclogo from "public/assets/sc.png";
import tslogo from "public/assets/ts.png";
import nodelogo from "public/assets/nodeandexpress.png";
import mysqllogo from "public/assets/mysql.png";
import restapi from "public/assets/restfulapi.png";
import figmalogo from "public/assets/figma.png";
import slacklogo from "public/assets/slack.png";
import zeplinlogo from "public/assets/zeplin.png";
import firebaselogo from "public/assets/firebaselogo.png";
import vercellogo from "public/assets/vercel.png";
import gitpage from "public/assets/github-pages.png";
import githublogo from "public/assets/githublogo.png";
import macos from "public/assets/macos.png";
import vscode from "public/assets/vscode.png";

const Container = styled.div``;

const contents = [
  { title: "Front End", images: [web3, reactlogo, reduxlogo, sclogo, tslogo] },
  { title: "Back End", images: [nodelogo, mysqllogo, restapi] },
  { title: "Communication", images: [figmalogo, slacklogo, zeplinlogo] },
  { title: "Deploy", images: [firebaselogo, vercellogo, gitpage] },
  { title: "Development Environment", images: [githublogo, macos, vscode] },
];

const Skills = () => {
  return (
    <Container>
      {contents.map((data) => {
        return (
          <SkillBox
            key={data.title}
            title={data.title}
            images={data.images}
          ></SkillBox>
        );
      })}
    </Container>
  );
};

export default Skills;
