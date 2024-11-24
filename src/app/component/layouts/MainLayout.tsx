"use client";

import { Layout, Row, Col, Affix, Grid, BackTop } from "antd";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useWindowHeight } from "@react-hook/window-size";
import React, { useRef, useState, Suspense } from "react";
import MyProfile from "../profile/MyProfile";
import { useThemeStore } from "@/app/lib/zustand/themeStore";

import COLOR from "../../core/colors";
import { ArrowUpOutlined } from "@ant-design/icons";
import IconMenu from "../menu/IconMenu";
import HeroBackground from "../common/Background";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const menuSticky = useRef(null);
  const onlyHeight = useWindowHeight();
  const controls = useAnimation();
  const screens = Grid.useBreakpoint();
  const [loading, setLoading] = useState(true);
  const [backColor, setBackColor] = useState("");
  const [affixed, setAffixed] = useState(false);
  const { useDark } = useThemeStore();

  return (
    <AnimatePresence>
      <Layout
        style={{ transition: "background-image 1s ease-in-out" }}
        className={`${useDark ? "dark" : "light"} auth main-layout`}
      >
        <Layout.Content
          style={{ minHeight: screens.md ? onlyHeight : "100%" }}
        >
          <motion.div animate={controls}>
            <HeroBackground backStyle={backColor} />
            <Row style={{ height: screens.lg ? "100vh" : "auto" }}>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={8}
                xl={8}
                xxl={8}
                style={{
                  alignSelf: "center",
                  paddingLeft: screens.lg ? 12 : 0,
                }}
              >
                <Suspense
                  fallback={
                    // <LazySkeletonLoader type="profile" row={2} />
                    <></>
                  }
                >
                  <MyProfile />
                </Suspense>
                <Suspense
                  fallback={
                    // <LazySkeletonLoader type="contact" row={10} />
                    <></>
                  }
                >
                  {/* <ContactCard /> */}
                </Suspense>
                <Suspense
                  fallback={
                    // <LazySkeletonLoader type="contact" row={1} />
                    <></>
                  }
                >
                  {/* <Footer /> */}
                </Suspense>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={1}
                xl={1}
                xxl={1}
                style={{ alignSelf: "center" }}
              >
                <Affix
                  onChange={(affixed) => {
                    if (affixed !== undefined) setAffixed(affixed);
                  }}
                  ref={menuSticky}
                  offsetTop={screens.lg ? 60 : 0}
                  style={{ transition: "background 0.5s ease" }}
                >
                  <div
                    style={{
                      transition: "background 0.5s ease",
                      background:
                        affixed && screens.lg === false
                          ? useDark
                            ? COLOR.AFFIX_BACK_COLOR_DARK
                            : COLOR.AFFIX_BACK_COLOR_LIGHT
                          : "transparent",
                    }}
                  >
                    <Suspense fallback={<></>}>
                      <IconMenu />
                    </Suspense>
                  </div>
                </Affix>
              </Col>
              <Col xs={24} sm={24} md={24} lg={15} xl={15} xxl={15}>
                {/* <FolioRoutes ref={RouteRef} loading={loading} /> */}
                <>{children}</>
              </Col>
            </Row>
            <BackTop
              visibilityHeight={400}
              style={{ bottom: 30, right: 30 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  height: 40,
                  width: 40,
                  lineHeight: "40px",
                  borderRadius: 4,
                  backgroundColor: COLOR.PURPLE_POINT_BG,
                  boxShadow: `0px 1px 10px 3px ${COLOR.BTN_LESS_SHADOW}`,
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 14,
                }}
              >
                <ArrowUpOutlined />
              </motion.div>
            </BackTop>
          </motion.div>
        </Layout.Content>
      </Layout>
    </AnimatePresence>
  );
};

export default MainLayout;
