"use client";

import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/theme";
import GlobalStyle from "@/app/styles/global";

interface EmotionThemeProps {
  children: React.ReactNode;
}

const EmotionTheme = ({ children }: EmotionThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default EmotionTheme;
