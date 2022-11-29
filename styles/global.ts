import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: ${({ theme }) => theme.primary};
    margin: 0;
    padding: 0;
    transition: all 0.25s;
  }
`;
