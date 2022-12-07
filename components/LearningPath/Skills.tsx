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
  {
    title: "Front End",
    content: [
      { image: web3, url: "https://blog.doyeonism.com/search/html" },
      { image: reactlogo, url: "https://blog.doyeonism.com/search/react" },
      { image: reduxlogo, url: "https://blog.doyeonism.com/search/redux" },
      {
        image: sclogo,
        url: "https://blog.doyeonism.com/search/styled-components",
      },
      { image: tslogo, url: "https://blog.doyeonism.com/search/typescript" },
    ],
  },
  {
    title: "Back End",
    content: [
      { image: nodelogo, url: "https://blog.doyeonism.com/search/node" },
      { image: mysqllogo, url: "https://blog.doyeonism.com/search/mysql" },
      { image: restapi, url: "https://blog.doyeonism.com/search/api" },
    ],
  },
  {
    title: "Communication",
    content: [
      { image: figmalogo, url: "https://blog.doyeonism.com/search/figam" },
      { image: slacklogo, url: "https://blog.doyeonism.com/search/slcak" },
      { image: zeplinlogo, url: "https://blog.doyeonism.com/search/zeplin" },
    ],
  },
  {
    title: "Deploy",
    content: [
      {
        image: firebaselogo,
        url: "https://blog.doyeonism.com/search/firebase",
      },
      { image: vercellogo, url: "https://blog.doyeonism.com/search/vercel" },
      { image: gitpage, url: "https://blog.doyeonism.com/search/gitpage" },
    ],
  },
  {
    title: "Development Environment",
    content: [
      { image: githublogo, url: "https://blog.doyeonism.com/search/github" },
      { image: macos, url: "https://blog.doyeonism.com/search/mac" },
      { image: vscode, url: "https://blog.doyeonism.com/search/vscode" },
    ],
  },
];

const Skills = () => {
  return (
    <Container>
      {contents.map((data) => {
        return (
          <SkillBox
            key={data.title}
            title={data.title}
            content={data.content}
          ></SkillBox>
        );
      })}
    </Container>
  );
};

export default Skills;
