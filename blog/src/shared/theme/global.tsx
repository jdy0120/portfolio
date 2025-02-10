import { css, Global } from "@emotion/react";
import { font } from "./font";

const GlobalStyle = () => (
  <Global
    styles={css`
      ${font}
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Pretendard", sans-serif;
      }

      html {
        background-color: #f3f4f6;
      }
    `}
  />
);

export default GlobalStyle;
