"use client";

import React from "react";
import { Theme, ThemeProvider } from "@emotion/react";
import { App, ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { theme as emotionTheme } from "../../styles/themes/theme";
import GlobalStyle from "../../styles/themes/global";

interface EmotionThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

const EmotionThemeProvider = ({
  children,
  theme = emotionTheme,
}: EmotionThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider
        theme={{
          // Colors
          token: {
            colorPrimaryBg: theme.colors.primary.bg,
            colorPrimaryBgHover: theme.colors.primary.bgHover,
            colorPrimaryBorder: theme.colors.primary.border,
            colorPrimaryBorderHover: theme.colors.primary.borderHover,
            colorPrimaryHover: theme.colors.primary.hover,
            colorPrimary: theme.colors.primary.default,
            colorPrimaryActive: theme.colors.primary.active,
            // colorPrimaryTextHover: theme.colors.primary.textHover,
            // colorPrimaryText: theme.colors.primary.text,
            // colorPrimaryTextActive: theme.colors.primary.textActive
            // colorPrimaryHover: theme.colors.primary[400],
            // colorPrimaryActive: theme.colors.primary[400],
            // colorPrimaryBg: theme.colors.primary[400]
            // colorSuccess: "#52c41a",
            // colorSuccessHover: "#73d13d",
            // colorSuccessActive: "#389e0d",
            // colorSuccessBg: "#f6ffed",
            // colorWarning: "#faad14",
            // colorWarningHover: "#ffc53d",
            // colorWarningActive: "#d48806",
            // colorWarningBg: "#fff7e6",
            // colorError: "#ff4d4f",
            // colorErrorHover: "#ff7875",
            // colorErrorActive: "#d9363e",
            // colorErrorBg: "#fff1f0",
            // colorInfo: "#1677ff",
            // colorInfoHover: "#69c0ff",
            // colorInfoActive: "#096dd9",
            // colorInfoBg: "#e6f7ff",
            // colorBgBase: "#ffffff",
            // colorBgContainer: "#ffffff",
            // colorBgElevated: "#ffffff",
            // colorBgLayout: "#f0f2f5",
            // colorBgSpotlight: "#fafafa",
            // colorBorder: "#d9d9d9",
            // colorInfoBorderHover: "#bfbfbf",
            // colorText: "#000000d9",
            // colorTextSecondary: "#00000073",
            // colorTextDisabled: "#00000040",
            // colorTextPlaceholder: "#d9d9d9",
            // Typography
            // fontSize: 14,
            // fontSizeHeading1: 38,
            // fontSizeHeading2: 30,
            // fontSizeHeading3: 24,
            // fontSizeHeading4: 20,
            // fontSizeHeading5: 16,
            // lineHeight: 1.5715,
            // lineHeightHeading1: 1.2,
            // lineHeightHeading2: 1.3,
            // lineHeightHeading3: 1.4,
            // fontWeightStrong: 600,
            // // Border
            // borderRadius: 6,
            // borderRadiusSM: 4,
            // borderRadiusLG: 8,
            // // Shadows
            // boxShadow:
            //   "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
            // boxShadowSecondary: "0 6px 16px rgba(0, 0, 0, 0.08)",
            // // Components
            // controlHeight: 32,
            // controlHeightSM: 24,
            // controlHeightLG: 40,
            // controlPaddingHorizontal: 12,
            // controlPaddingHorizontalSM: 8,
            // // Animation
            // motionEaseInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            // motionEaseOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            // motionDurationFast: "100ms",
            // motionDurationMid: "200ms",
            // motionDurationSlow: "300ms",
            // // Z-Index
            // zIndexBase: 0
          },

          // Components settings (defaults)
          components: {
            Button: {
              borderRadius: 12,
              size: 16,
              fontWeight: 500,
              controlHeight: 40,
              colorPrimary: theme.colors.primary.default,
            },
            // Checkbox: {
            //   size: 48,
            //   borderRadius: 40
            // },
            Input: {
              borderRadius: 12,
            },
            // Modal: {
            //   borderRadius: 10
            // },
            // Card: {
            //   borderRadius: 8,
            //   padding: 16,
            //   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
            // },
            // Table: {
            //   borderColor: "#d9d9d9",
            //   headerColor: "#fafafa",
            //   rowHoverBg: "#f5f5f5"
            // }
          },
        }}
      >
        <App>
          <AntdRegistry>
            <GlobalStyle />
            {children}
          </AntdRegistry>
        </App>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default EmotionThemeProvider;
