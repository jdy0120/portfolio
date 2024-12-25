import { css, Theme } from "@emotion/react";

const primaryColor = {
  bg: "#F9F9FA",
  bgHover: "#3B1C32",
  border: "#1A1A1D",
  borderHover: "#3B1C32",
  hover: "#6A1E55",
  default: "#1A1A1D",
  active: "#A64D79",
  textHover: "#4f7eff",
  text: "#2656f6",
  textActive: "#6A1E55",
};

const theme: Theme = {
  colors: {
    primary: primaryColor,
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
  typography: {
    semibold: css`
      font-family: var(--FontFamily);
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: var(--LetterSpacing);
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    `,
    regular: css`
      font-family: var(--FontFamily);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: var(--LetterSpacing);
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    `,
  },
};

export { theme };
