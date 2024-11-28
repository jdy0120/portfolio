"use client";

import { useState } from "react";
import {
  Row,
  Col,
  List,
  Divider,
  Card as CardView,
  Skeleton,
  Empty,
  Grid,
  Spin,
} from "antd";

import { motion } from "framer-motion";

import COLOR from "../../core/colors";

import {
  pageTransition,
  pageVariants,
  ItemStyle,
  ContainerStyle,
} from "../../interface/motion";

import BlogCard from "../../component/card/BlogCard";
import LottieLoader from "../../component/loader/LottieLoader";

import { useThemeStore } from "../../lib/zustand/themeStore";

const Post = () => {
  const { useDark, currentPage, setCurrentPage } = useThemeStore();

  const screens = Grid.useBreakpoint();
  const [selectTag, updateTag] = useState("");
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    total: 1,
    page: currentPage,
    pageSize: 12,
  });

  const [content, setContent] = useState({
    page: currentPage,
    tags: [
      {
        id: "",
        name: "",
      },
    ],
    entries: [],
    total: 0,
    skip: 0,
    limit: 0,
  });

  // useEffect(() => {
  //   if (Object.keys(screens).length > 0) {
  //     console.log("screens: ", screens);
  //     if (screens.xl === false) {
  //       fetch(1, "", 6);
  //     } else {
  //       fetch(1, "", 12);
  //     }
  //   }
  // }, [screens]);

  const setPage = async (param: {
    totalCount: number;
    selectPage: number;
    period: number;
  }) => {
    setPagination({
      total: param.totalCount,
      page: param.selectPage,
      pageSize: param.period,
    });
  };

  const Loader = {
    spinning: loading,
    indicator: <LottieLoader text="loading" />,
    // tip: '조회 중입니다'
  };

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
      // style={pageStyle}
    >
      <CardView
        style={{
          borderRadius: 12,
          boxShadow: useDark
            ? "none"
            : `0px 0px 20px 1px ${COLOR.BLOG_CARD_SHADOW}`,
          border: "none",
          margin: screens.xs ? 0 : 18,
        }}
        bodyStyle={{
          padding: 28,
          backgroundColor: useDark
            ? "rgba(36, 36, 36, 1)"
            : "rgba(243, 243, 243, 1)",
          borderRadius: 12,
        }}
      >
        <Divider orientation="left" style={{ marginTop: 0 }}>
          Blog
        </Divider>
        <Row>
          <Col span={24}>
            <Row style={{ paddingBottom: 20 }}>
              {/* <Col span={12} style={{ alignSelf: 'center' }}>
                <TagFilters
                  tags={content.tags}
                  updatePage={handleTagChosen}
                  selectedTagId={selectTag}
                />
              </Col> */}
              <Col
                span={24}
                style={{ textAlign: "right", alignSelf: "center" }}
              >
                {/* <Pagination
                  {...pagination}
                  onChange={onHandlePaging}
                  size="small"
                  defaultCurrent={pagination.page}
                /> */}
              </Col>
            </Row>
            <motion.div
              className="container"
              variants={ContainerStyle}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {content.entries === undefined ? (
                <Empty description="포스팅 글이 없네요 :D" />
              ) : content.entries.length > 0 ? (
                <List
                  loading={Loader}
                  grid={{
                    gutter: 28,
                    xs: 2,
                    sm: 2,
                    md: 2,
                    lg: 2,
                    xl: 4,
                    xxl: 4,
                  }}
                  dataSource={content.entries}
                  renderItem={(item: any) => {
                    return (
                      <motion.div
                        variants={ItemStyle}
                        style={{ paddingBottom: 18 }}
                      >
                        <List.Item>
                          <BlogCard info={item} />
                        </List.Item>
                      </motion.div>
                    );
                  }}
                />
              ) : (
                <Spin {...Loader}>
                  <List
                    grid={{
                      gutter: 24,
                      xs: 2,
                      sm: 2,
                      md: 2,
                      lg: 2,
                      xl: 4,
                      xxl: 4,
                    }}
                  >
                    <List.Item>
                      <Skeleton active />
                    </List.Item>
                    <List.Item>
                      <Skeleton active />
                    </List.Item>
                  </List>
                </Spin>
              )}
            </motion.div>
          </Col>
        </Row>
      </CardView>
    </motion.div>
  );
};

export default Post;
