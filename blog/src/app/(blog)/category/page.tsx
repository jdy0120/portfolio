"use client";
import React from "react";
import { CategoryPageStyles } from "./page.styles";
import PageMotion from "@/shared/animation/page/page.motion";

const page = () => {
  return (
    <PageMotion>
      <CategoryPageStyles.Container>
        category
      </CategoryPageStyles.Container>
    </PageMotion>
  );
};

export default page;
