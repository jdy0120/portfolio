"use client";

import React, { useRef } from "react";
import {
  Row,
  Col,
  Divider,
  Card,
  Typography,
  Badge,
  Grid,
} from "antd";

import COLOR from "../../core/colors";
import { pageVariants, pageTransition } from "../../interface/motion";
import { IntroText, StackText, HashTag } from "./about.styles";
import StackCard from "../../component/card/StackCard";
import {
  frontEndStack,
  backEndStack,
  SFStack,
  infraStack,
  ciStack,
  remoteStack,
  interestStack,
} from "../../core/stacks";

import { motion } from "framer-motion";
import { useThemeStore } from "@/app/lib/zustand/themeStore";
import { useRouter } from "next/navigation";
const page = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { useDark } = useThemeStore();
  const screens = Grid.useBreakpoint();
  const router = useRouter();

  return (
    <motion.div
      ref={scrollRef}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        padding: screens.lg ? "0px" : "20px",
      }}
      // style={pageStyle}
    >
      {/* <HeadMeta
        title="About Me"
        text="About Me"
        keywords="FrontEnd Developer"
        description="About JW"
        url="about"
      /> */}

      <Card
        className="glass"
        style={{
          borderRadius: 12,
          margin: screens.xs ? 0 : 20,
          transition: "box-shadow .3s",
          boxShadow: useDark
            ? "none"
            : `0px 0px 20px 1px ${COLOR.ABOUT_CARD_SHADOW}`,
          // height: screens.lg ? "96vh" : "70vh"
        }}
        bodyStyle={{
          padding: "18px",
        }}
      >
        <Row gutter={24}>
          {/*  INTRODUCE */}
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <Divider orientation="left">INTRODUCE</Divider>
            <IntroText level={3}>
              안녕하세요. <br />
              저는 현재{" "}
              <Typography.Text underline>
                FrontEnd
              </Typography.Text>{" "}
              직군에서 프로젝트를 진행하고있습니다. <br />
              Javascript 언어를 가장 좋아합니다. <br />
              FrontEnd 및 BackEnd 직군으로 프로젝트를 진행한 경력이
              있습니다. <br />
              <br />
              현재는 Salesforce 솔루션을 이용한 CRM 개발 프로젝트를
              진행 중입니다.
              <br />
              기술 트렌드와 실제 프로덕션의 중간에서 효율점을 찾아가며
              <br />
              하루하루 발전해 나가고 있습니다. 잘 부탁드립니다.
              <br />
            </IntroText>
          </Col>
          {/* TAGS */}
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Divider orientation="left">TAGS</Divider>
            <HashTag>
              #React #NextJS #Javascript #Typescript #Node.JS #jQuery
              #Express #GraphQL #MySQL #AWS #Cognito #MySQL
              #SpringBoot
            </HashTag>
          </Col>
        </Row>
        <Divider orientation="left" style={{ marginBottom: 28 }}>
          FrontEnd Stack
          <StackText
            style={{ paddingLeft: 12, fontSize: 12, fontWeight: 100 }}
          >
            <Badge status="processing" color="green" />
            {screens.md
              ? ": 현재 진행 중인 프로젝트에서 사용중"
              : ": 현재 프로젝트에서 사용중"}
          </StackText>
        </Divider>

        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Row gutter={[0, 16]}>
              <StackCard type="front" data={frontEndStack} />
            </Row>
          </Col>
        </Row>

        <Divider orientation="left" style={{ marginBottom: 28 }}>
          BackEnd Stack
        </Divider>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <StackCard type="backend" data={backEndStack} />
          </Col>
        </Row>

        <Divider orientation="left" style={{ marginBottom: 28 }}>
          Salesforce Stack
        </Divider>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <StackCard type="salesforce" data={SFStack} />
          </Col>
        </Row>

        {/* 인프라 */}
        <Divider orientation="left" style={{ marginBottom: 28 }}>
          Infra Stack
        </Divider>

        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <StackCard type="infra" data={infraStack} />
          </Col>
        </Row>

        <Divider orientation="left" style={{ marginBottom: 28 }}>
          CI & CD
        </Divider>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <StackCard type="ci" data={ciStack} />
          </Col>
        </Row>

        {/* 형상관리 */}
        <Divider orientation="left" style={{ marginBottom: 28 }}>
          Remote Repository
        </Divider>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <StackCard type="remote" data={remoteStack} />
          </Col>
        </Row>

        {/* 관심스택 */}
        <Divider orientation="left" style={{ marginBottom: 28 }}>
          Interest
        </Divider>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <StackCard type="interest" data={interestStack} />
          </Col>
        </Row>
      </Card>
    </motion.div>
  );
};

export default page;
