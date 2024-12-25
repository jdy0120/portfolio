import { css, Global } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      h1 {
        margin: 0;
      }
    `}
  />
);

export default GlobalStyle;
