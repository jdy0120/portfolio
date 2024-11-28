import { css, Global } from "@emotion/react";
import "normalize.css";

const GlobalStyle = () => (
  <Global
    styles={css`
      @import "normalize.css";

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyle;
