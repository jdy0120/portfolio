"use client";
import React from "react";
import { AboutPageStyles } from "./page.styles";
import PageMotion from "@/shared/animation/page/page.motion";

const page = () => {
  return (
    <PageMotion>
      <AboutPageStyles.Container>about</AboutPageStyles.Container>
    </PageMotion>
  );
};

export default page;
