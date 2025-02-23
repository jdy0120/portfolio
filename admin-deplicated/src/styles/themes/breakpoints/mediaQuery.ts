import { SerializedStyles, css } from "@emotion/react";

const setBreakPointStyle =
  (style: SerializedStyles) => (breakPoints: number) => css`
    @media screen and (min-width: ${breakPoints}) {
      ${style}
    }
  `;

export { setBreakPointStyle };
