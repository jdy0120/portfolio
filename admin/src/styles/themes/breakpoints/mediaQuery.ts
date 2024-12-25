import { SerializedStyles, css } from "@emotion/react";
import { breakPoints } from "../theme";

const setDesktopStyle = (style: SerializedStyles) => css`
  @media screen and (min-width: ${breakPoints.mobile}) {
    ${style}
  }
`;

const setMobileStyle = (style: SerializedStyles) => css`
  @media screen and (max-width: ${breakPoints.mobile}) {
    ${style}
  }
`;

export { setDesktopStyle, setMobileStyle };
