import { css } from "@emotion/react";

const typography = {
  HomePageTitle: css`
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  `,
  MenuText: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  `,
};

const theme = {
  colors: {
    primary: {
      bg: "#f0f6ff",
      bgHover: "#c9ddff",
      border: "#a1c0ff",
      borderHover: "#78a0ff",
      hover: "#4f7eff",
      default: "#2656f6",
      active: "#153acf",
      textHover: "#4f7eff",
      text: "#2656f6",
      textActive: "#153acf",
    },
    white: {
      default: "#FFFFFF",
      info: "#2656F6",
    },
    black: "#000000",
    negative: "#F21724",
    gray: {
      50: "#F9FAFB",
      100: "#F5F6F7",
      200: "#E9EBED",
      300: "#DBDEE2",
      400: "#BFC6D2",
      500: "#AAB1BC",
      600: "#8E94A0",
      700: "#6F7785",
      800: "#404A5C",
      900: "#101C33",
    },
  },
  typography,
};

export { theme };
