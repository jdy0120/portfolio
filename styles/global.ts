import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: 'Noto Sans KR', sans-serif;
    white-space:pre-line
  }
  body {
    background: ${({ theme }) => theme.primary};
    margin: 0;
    padding: 0;
    transition: all 0.25s;
  }
`;
