import { SerializedStyles, css } from "@emotion/react";

const setBreakpointStyle =
  (style: SerializedStyles) => (breakpoint: number) => css`
    @media screen and (min-width: ${breakpoint}px) {
      ${style}
    }
  `;

export { setBreakpointStyle };
