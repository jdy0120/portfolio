"use client";

import { Timeline, Row, Col, Card, Grid } from "antd";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../../interface/motion";

import ResumeContent from "../../component/resume/ResumeContent";
import COLOR from "../../core/colors";
import { useThemeStore } from "@/app/lib/zustand/themeStore";
const History = () => {
  const screens = Grid.useBreakpoint();
  const { useDark } = useThemeStore();

  return (
    <motion.div
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
    >
      <Card
        className="glass"
        style={{
          padding: "6px 0px",
          borderRadius: 12,
          margin: screens.xs ? 0 : 20,
          transition: "box-shadow .3s",
          boxShadow: useDark
            ? "none"
            : `0px 0px 20px 1px ${COLOR.RESUME_CARD_SHADOW}`,
        }}
        bodyStyle={{ padding: screens.md ? "24px" : "12px" }}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Timeline>
              <ResumeContent />
            </Timeline>
          </Col>
        </Row>
      </Card>
    </motion.div>
  );
};

export default History;
