"use client";

import React from "react";
import { TagPageStyles } from "./page.styles";
import PageMotion from "@/shared/animations/page/page.motion";

const page = () => {
  return (
    <PageMotion>
      <TagPageStyles.Container>tag</TagPageStyles.Container>
    </PageMotion>
  );
};

export default page;
