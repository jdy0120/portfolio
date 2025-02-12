"use client";

import React from "react";
import { ContactPageStyles } from "./page.styles";
import PageMotion from "@/shared/animations/page/page.motion";

const page = () => {
  return (
    <PageMotion>
      <ContactPageStyles.Container>
        contact
      </ContactPageStyles.Container>
    </PageMotion>
  );
};

export default page;
